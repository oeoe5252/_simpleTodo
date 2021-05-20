<template>
    <div class="input-text">
        <input
            type="text"
            :id="idx"
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
// import NowDate from "@/assets/js/dateTime.js";
// import { ITEM_STATE } from "@/store/constants";
// import { mapMutations } from "vuex";
import { mapActions } from "vuex";

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
            todoTextData: "",
            chkId: "",
            chkText: "",
            date: "",
            state: "",
            id: "",
            text: "",
            // created_at: "",
            // updated_at: "",
        };
    },
    props: {
        idx: {
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
        // ...mapMutations(["addItems"]),
        ...mapActions(["tmpAddItem"]),

        addItem: function () {
            if (this.todoTextData !== "") {
                // let time = new NowDate();
                let itemObj = {
                    // id는 자동할당
                    // id: "id-" + time.getDateTime(),
                    text: this.todoTextData,
                    // date도 자동할당
                    // date: time.getDateTime(),
                    // dateFormat: time.changeDateFormat("type2"),
                    // state: ITEM_STATE.normal,
                    // stae 1: 미완료 2:완료
                    // state: 1,
                };
                this.tmpAddItem(itemObj)
                // this.addItems(itemObj);
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