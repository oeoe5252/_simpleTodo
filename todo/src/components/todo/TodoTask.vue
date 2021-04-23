<template>
    <div class="todo-task-wrap">
        <p>You've got</p>
        <p class="todo-count">
            <em class="num-remain">0</em>
            <span class="num-hr">&#47;</span>
            <span class="num-total"> {{ total }} </span>
        </p>
        <p>task today!</p>
    </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: "TodoTask",
    computed: {
        ...mapGetters({
            total: "totalItems",
        }),
    },
};
</script>

<style lang="scss">
.todo-task-wrap {
    font-size: 2.8rem;
    font-weight: 700;
    color: $grayF9;
    margin-bottom: 1.5em;
    .todo-count {
        margin-top: 1em;
        margin-bottom: 0.5em;
        .num-remain {
            font-weight: 700;
            font-size: 6.5rem;
        }
        .num-total {
        }
        .num-hr {
            padding: 0 0.3em;
        }
    }
}
</style>