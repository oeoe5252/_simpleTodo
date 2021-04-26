<template>
    <div class="input-text">
        <input
            type="text"
            :id="id"
            :placeholder="placeholder"
            v-model="todoTextData"
            @keyup.enter="addItem"
        />
        <add-btn
            icon="fi-rr-check"
            btnStyle="add"
            msg="추가버튼"
            @addItem="addItem"
        ></add-btn>
    </div>
</template>
<script>
import addBtn from "@/components/base/BaseButton.vue";
import NowDate from "@/assets/js/dateTime.js";
import { ITEM_STATE } from "@/store/constants";
import { mapMutations } from "vuex";

export default {
    name: "InputText",
    components: {
        addBtn,
    },
    computed: {
        makeTimeId(time) {
            return "id" + time;
        },
    },
    data() {
        return {
            idx: 0,
            todoTextData: "",
            chkName: "",
            chkId: "",
            chkText: "",
            date: "",
            state: "",
        };
    },
    props: {
        id: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        value: {
            type: String,
        },
    },
    methods: {
        ...mapMutations(["addItems"]),

        addItem: function () {
            if (this.todoTextData !== "") {
                let time = new NowDate();
                let itemObj = {
                    chkId: "id-" + time.getDateTime(),
                    chkText: this.todoTextData,
                    date: time.getDateTime(),
                    dateFormat: time.changeDateFormat("type2"),
                    state: ITEM_STATE.normal,
                };
                this.addItems(itemObj);
                this.clearText();
            } else {
                window.alert(this.placeholder);
            }
        },
        clearText: function () {
            this.todoTextData = "";
        },
    },
};
</script>
<style lang="scss">
.input-text {
    position: relative;
    margin-bottom: 3rem;

    -webkit-transform-origin: 50% 0;
    -webkit-transform-style: preserve-3d;
    -webkit-animation-delay: 0.1s;
    -webkit-transform: perspective(1000px) rotateX(-90deg);

    transform-origin: 50% 0;
    transform-style: preserve-3d;
    transform: perspective(1000px) rotateX(-45deg);
    animation-delay: 0.1s;
    animation: swing 0.6s forwards;

    [type="text"] {
        @include itemSize(100%, 60px);
        @include box-shadow($defaultShadow...);
        @include border-radius(30px);
        padding: 0 6.5rem 0 3rem;
        background-color: $white50;
    }
}
</style>