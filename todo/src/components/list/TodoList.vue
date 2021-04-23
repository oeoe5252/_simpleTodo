<template>
    <ul class="todo-list">
        <li v-for="(item, index) of StateItems" :key="index">
            <base-check
                :name="item.chkName"
                :id="item.chkId"
                :msg="item.chkText"
            ></base-check>
            <div class="util-wrap">
                <base-btn
                    btnStyle="clear"
                    icon="fi-rr-cross"
                    msg="아이템 삭제"
                    @click="clearItem"
                ></base-btn>
                <base-btn
                    btnStyle="edit"
                    :soundOnly="false"
                    :msg="item.date"
                ></base-btn>
            </div>
        </li>
    </ul>
</template>
<script>
import BaseCheck from "@/components/form/BaseCheck.vue";
import BaseBtn from "@/components/base/BaseButton.vue";
import { mapState } from "vuex";
// import { mapMutations } from "vuex";

export default {
    name: "TodoList",
    components: {
        BaseCheck,
        BaseBtn,
    },
    computed: {
        ...mapState({
            // state 정보 : 로컬스토리지데이터 + 추가된 데이터
            // localstorage에 있는 정보를 뿌리는게 아니라, state에 있는 정보를 뿌리는거기 때문에, state에 있는 변경된 정보를 키에 저장할 필요가 있음
            // nop 로컬에 있는 정보를 app 처음 부를때 스테이트로 받아와줌,
            // 변경 사항 발생하면 로컬로 저장도 됨!!!
            StateItems: "tmpListData",
        }),
    },
    methods: {
        // ...mapMutations(["changeItemState"]),
        clearItem: function () {
            // 클릭 오류(순서 잘못생각했나봐)
            console.log("index");
            // let i = 0;
            // this.changeItemState({ text: ++i });

            this.$store.commit("changeItemState", { text: "왜 안되" });
            // this.$store.commit(changeState, { text: "왜 안되" });
            // this.changeState("왜 안대");
            // this.tmpCountUp("왜 안대")
        },
    },
};
</script>

<style lang="scss">
.todo-list {
    li {
        @include displayFlex($valFlexBetweenStart...);
        position: relative;
        background-color: $white;
        border-radius: 5px;
        margin-bottom: 10px;
        @include box-shadow($defaultShadow2...);
        padding: 1.5rem;

        .util-wrap {
            margin-left: 10px;
        }
    }
}
</style>