<template>
    <ul class="todo-list">
        <li v-for="(item, index) of StateItems" :key="index">
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
                    @clearItem="clearItem({item})"
                ></base-btn>
                <base-btn
                    btnStyle="edit"
                    :soundOnly="false"
                    :msg="item.dateFormat"
                ></base-btn>
            </div>
        </li>
    </ul>
</template>
<script>
import BaseCheck from "@/components/form/BaseCheck.vue";
import BaseBtn from "@/components/base/BaseButton.vue";
import { mapState, mapMutations } from "vuex";

export default {
    name: "TodoList",
    components: {
        BaseCheck,
        BaseBtn,
    },
    data() {
        return {
            testDateTime: ""
        }
    },
    computed: {
        ...mapState({
            StateItems: "tmpListData",
        }),
    },
    methods: {
        ...mapMutations({
            clearItem: "clearItems"
        }),
    },
};
</script>

<style lang="scss">
.todo-list {
    li {
        @include displayFlex($valFlexBetweenStart...);
        position: relative;
        border-radius: 5px;
        background-color: $white;
        @include box-shadow($defaultShadow2...);
        margin-bottom: 10px;
        padding: 1.5rem;

        .util-wrap {
            margin-left: 10px;
        }
    }
}
</style>