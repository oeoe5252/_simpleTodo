<template>
    <div class="todo-hello-wrap">
        <p class="todo-hello">
            <span> {{ dayMsg }} </span>
            <!-- A-3: 기기 번호 불러와 뿌려주기 -->
            <span class="user-name" @click="onLogin">52</span>
        </p>
    </div>
</template>
<script>
import { DAY_TIME } from "@/store/constants";
import { mapState, mapActions } from "vuex";

export default {
    name: "TodoHello",
    computed: {
        ...mapState(["dayState"]),

        dayMsg() {
            let result = "";
            switch (this.dayState) {
                case DAY_TIME.morning:
                    result = "Good morning, ";
                    break;
                case DAY_TIME.afternoon:
                    result = "Good afternoon, ";
                    break;
                case DAY_TIME.evening:
                    result = "Good evening, ";
                    break;
            }
            return result;
        },
    },
    // A-3: 기기 번호 불러와 뿌려주기
    methods: {
        ...mapActions(["deviceCheck"]),

        onLogin() {
            console.log("0000click")
            this.deviceCheck("1")
        }
    }
};
</script>
<style lang="scss">
.todo-hello-wrap {
    font-size: 2.5rem;
    font-weight: 500;
    color: $grayF9;
    margin-bottom: 2em;

    .user-name {
        padding-left: 0.5rem;
    }
}
</style>
