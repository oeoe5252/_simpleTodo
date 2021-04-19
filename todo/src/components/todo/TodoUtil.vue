<template>
    <div class="todo-util">
        <!-- sort select 컴포넌트-->
        <todo-sort id="sort" msg="정렬선택"></todo-sort>
        <!-- clear btn 컴포넌트-->
        <clear-all-btn 
            icon="fi-rr-delete"
            btnStyle="allclear"
            msg="전체삭제버튼"></clear-all-btn>
    </div>
</template>
<script>
import TodoSort from '@/components/form/BaseSelect.vue'
import ClearAllBtn from '@/components/base/BaseButton.vue'

export default {
    name: 'TodoUtil',
    components: {
        TodoSort,
        ClearAllBtn
    }
}
</script>