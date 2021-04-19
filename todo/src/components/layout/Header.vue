<template>
    <header class="header">
        <h1 class="logo">
            <span>52</span>
            <span class="swing">👍</span>
        </h1>
        <!-- 일자 영역 -->
        <div class="date">
            MM/DD Sun
        </div>
    </header>
</template>
<script>
export default {
    name: 'TodoHeader',
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