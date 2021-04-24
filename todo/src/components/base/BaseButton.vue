<template>
    <button class="btn" :class="classStyle" @click="alertMsg">
        <i v-if="icon" :class="icon"></i>
        <span :class="{'sr-only': soundOnly}"> {{ msg }} </span>
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
            type: [String, Number],
            default: '임시 버튼'
        },
        soundOnly: {
            type: Boolean,
            default: true
        },
        icon: {
            type: String,
        }
    },
    methods: {
        
        alertMsg() {
            window.alert(this.msg)
            // 여기서 emit 이벤트를 보내던지... 아님 부모에서 native 쓰던지, 아님 여기서 mutation 부르던지(그럼 선택된 인자를 전달 받긴 해야함... 뭐야 왜 복잡해.)
            switch(this.btnStyle) {
                case 'add':
                    console.log("add")
                    this.$emit('addItem')
                    break
                case 'clear':
                    console.log("clear")
                    this.$emit('clearItem')
                    break
                case 'allclear':
                    console.log("allclear")
                    this.$emit('clearAll')
                    break
            }
        }
    },
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
        &.btn-edit {
            position: absolute;
            bottom: $defaultSpace2;
            right: 1.5rem;
        }
    }
</style>