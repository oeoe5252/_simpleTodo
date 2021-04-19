<template>
    <button class="btn" :class="classStyle">
        <i v-if="icon" :class="icon"></i>
        <span class="sr-only"> {{ msg }} </span>
    </button>
</template>
<script>
export default {
    name: 'BaseButton',
    computed: {
        classStyle() {
            return 'btn-' + this.btnStyle
        }
    },
    props: {
        btnStyle: {
            type: String,
            default: 'text'
        },
        msg: {
            type: String,
            default: '임시 버튼'
        },
        icon: {
            type: String,
        }
    }
}
</script>
<style lang="scss">
    .btn {
        &[class*=btn-] {
            color: $gray9;
            &:hover {
                color: $gray3;
                transition: all .3s ease;
            }
        }
        &.btn-add {
            position: absolute;
            @include displayFlex($valFlexCenter...);
            @include itemSize(35px,35px);
            top: 0; bottom: 0; right: 1.5rem;
            font-size: 1.8rem;
            @include border-radius(100%);
            @include box-shadow($defaultShadow...);
            background-color: $grayE;
            margin: auto;
        }
        &.btn-allclear {
            
        }
    }
</style>