<template>
    <div id="todo-app" :class="$store.state.dayState">
        <!-- 키비주얼 -->
        <div class="kv">
            <div class="inner pb20">
                <todo-header></todo-header>
                <todo-hello></todo-hello>
                <todo-task></todo-task>
                <todo-input
                    idx="todo-task"
                    placeholder="Enter your task"
                ></todo-input>
            </div>
        </div>
        <!-- 리스트 영역 -->
        <div class="content">
            <div class="inner">
                <todo-util></todo-util>
                <todo-list></todo-list>
                <todo-footer></todo-footer>
            </div>
        </div>
        <!-- 모달영역 -->
        <!-- [TODO]
      - 리스트 모두 완료하면 축하 팝업 뽜봐밤 🎉🎉
      - 날짜 누르면 수정 추가 (수정 날짜 필요)
     -->
    </div>
</template>

<script>
import NowDate from "@/assets/js/dateTime.js";

import TodoHeader from "@/components/todo/TodoHeader.vue";
import TodoHello from "@/components/todo/TodoHello.vue";
import TodoTask from "@/components/todo/TodoTask.vue";
import TodoInput from "@/components/form/TextInput.vue";
import TodoUtil from "@/components/todo/TodoUtil.vue";
import TodoList from "@/components/todo/TodoList.vue";
import TodoFooter from "@/components/todo/TodoFooter.vue";

export default {
    name: "TodoApp",
    components: {
        TodoHeader,
        TodoHello,
        TodoTask,
        TodoInput,
        TodoUtil,
        TodoList,
        TodoFooter,
    },
    computed: {
        detectDayTime() {
            let time = new NowDate();
            return time.detectDayTime();
        },
    },
    created() {
        let time2 = new NowDate();
        time2.detectDayTime();
        console.log("jjjj", time2.detectDayTime());

        this.$store.commit("detectDayTime", time2.detectDayTime());
    },
};
</script>

<style lang="scss">
body {
    background-color: #fafafa;
}
.kv {
    min-height: 40rem;
}
#todo-app {
    &.morning {
        .kv {
            background-image: linear-gradient(179deg, #9ce8ff 0%, #ffeb86 70%);
        }
    }

    &.afternoon {
        .kv {
            background-image: linear-gradient(179deg, #9cdfff 0%, #869bff 70%);
        }
    }

    &.evening {
        .kv {
            background-image: linear-gradient(1deg, #9e9cff 0%, #000933 70%);
        }
    }
}
</style>
