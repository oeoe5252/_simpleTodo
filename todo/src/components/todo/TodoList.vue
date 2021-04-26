<template>
    <draggable
        v-model="StateItems"
        @start="drag = true"
        @end="drag = false"
        class="todo-list"
        tag="ul"
    >
        <li v-for="(item, index) of StateItems" :key="index" class="item">
            <base-check
                :id="item.chkId"
                :name="item.chkId"
                :msg="item.chkText"
                :item="item"
                :idx="index"
            ></base-check>
            <div class="util-wrap">
                <base-btn
                    btnStyle="clear"
                    icon="fi-rr-cross"
                    msg="아이템 삭제"
                    @clearItem="clearItem({ item })"
                ></base-btn>
                <base-btn
                    btnStyle="edit"
                    :soundOnly="false"
                    :msg="item.dateFormat"
                ></base-btn>
            </div>
        </li>
    </draggable>
</template>
<script>
import BaseCheck from "@/components/form/BaseCheck.vue";
import BaseBtn from "@/components/base/BaseButton.vue";
import draggable from "vuedraggable";
import { mapState, mapMutations } from "vuex";

export default {
    name: "TodoList",
    components: {
        BaseCheck,
        BaseBtn,
        draggable,
    },
    data() {
        return {
            testDateTime: "",
        };
    },
    computed: {
        // [NOTE] computed도 value 넘길 수 있다. (get, set 활용)
        ...mapState({
            StateItems: "tmpListData",
        }),
        StateItems: {
            get() {
                return this.$store.state.tmpListData;
            },
            set(value) {
                // value는 ItemArray 전체
                this.$store.commit("updateItems", value);
            },
        },
    },
    methods: {
        ...mapMutations({
            clearItem: "clearItems",
        }),
    },
};
</script>

<style lang="scss">
.todo-list {
    .item {
        @include displayFlex($valFlexBetweenStart...);
        position: relative;
        border-radius: 5px;
        background-color: $white;
        @include box-shadow($defaultShadow2...);
        margin-bottom: 10px;
        padding: 1.5rem;

        -webkit-transform-origin: 50% 0;
        -webkit-transform-style: preserve-3d;
        -webkit-animation-delay: 0.1s;
        -webkit-transform: perspective(1000px) rotateX(-90deg);

        transform-origin: 50% 0;
        transform-style: preserve-3d;
        transform: perspective(1000px) rotateX(-45deg);
        animation-delay: 0.1s;
        animation: swing 0.6s forwards;

        .util-wrap {
            margin-left: 10px;
        }
    }
}
</style>