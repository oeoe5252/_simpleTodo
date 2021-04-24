<template>
    <div class="todo-util">
        <!-- sort select 컴포넌트-->
        <todo-sort id="sort" msg="정렬선택"></todo-sort>
        <!-- clear btn 컴포넌트-->
        <clear-all-btn 
            :soundOnly=false
            btnStyle="allclear"
            msg="Clear All"
            @clearAll="clearAll"></clear-all-btn>
    </div>
</template>
<script>
import TodoSort from '@/components/form/BaseSelect.vue'
import ClearAllBtn from '@/components/base/BaseButton.vue'
import { mapMutations } from "vuex";

export default {
    name: 'TodoUtil',
    components: {
        TodoSort,
        ClearAllBtn
    },
    methods: {
        ...mapMutations({
            clearAll: "clearAllItems"
        })
    }
}
</script>

<style lang="scss">
    .todo-util {
        @include displayFlex($valFlexBetweenCenter...);
        padding: $defaultSpace 0;
    }
</style>