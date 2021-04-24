<template>
    <header class="header">
        <h1 class="logo">
            <span>52</span>
            <span class="swing">👍</span>
        </h1>
        <!-- 일자 영역 -->
        <div class="date">
            {{ thisTime }}
        </div>
    </header>
</template>
<script>
import CurrentDate from '@/assets/js/dateTime.js'

export default {
    name: 'TodoHeader',
    data() {
        return {
            // thisTime: ""
        }
    },
    computed: {
        thisTime() {
            return CurrentDate.getNowTime()
        }
    },
}
</script>
<style lang="scss">
    .header {
        @include displayFlex($valFlexBetweenCenter...);
        color: $white;
        padding-top: $defaultSpace;
        padding-bottom: $defaultSpace * 2;
        
        .logo {
            font-size: $nomalFont;
        }
        .date {
            font-size: $nomalFont;
        }
    }
</style>