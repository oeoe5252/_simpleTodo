<template>
    <div class="todo-hello-wrap">
        <p class="todo-hello">
            <!-- [TODO] 시간에 따른 인사말 구분 -->
            <span>Good morning,</span>
            <!-- <span>Good afternoon,</span> -->
            <!-- <span>Good evening,</span> -->
            <span>{ user }</span>
        </p>

    </div>
</template>
<script>
export default {
    name: 'TodoHello',
    components: {
    }
}
</script>
<style lang="scss">
    .todo-hello-wrap {
        font-size: 2.5rem;
        font-weight: 500;
        color: $grayF9;
        margin-bottom: 2em;
    }
</style>
