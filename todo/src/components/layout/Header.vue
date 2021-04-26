<template>
    <header class="header">
        <h1 class="logo">
            <span>52</span>
            <span class="swing">👍</span>
        </h1>
        <div class="date"> {{ thisTime }} </div>
    </header>
</template>
<script>
import NowDate from '@/assets/js/dateTime.js'

export default {
    name: 'TodoHeader',
    computed: {
        thisTime() {
            let time = new NowDate()
            return time.getMonth() + "/" +  time.getDay() + " [" + time.getDayOfWeek() + "]"
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