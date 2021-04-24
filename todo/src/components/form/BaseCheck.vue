<template>
    <!-- TodoCheck 리스트에서만 쓸 수 있는 스타일..ㅎㅎ 체크박스 -->
    <div class="input-check type1">
        <input 
            :id="id"
            type="checkbox"
            :name="name"
            :checked="item.state === 'done'"
            @change="onChangeChecked" />
        <label 
            :for="id"
            class="label-legend"> 
            <span>{{ item.state }} - {{msg}}</span> </label>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'

export default {
    name: 'BaseCheck',
    props: {
        msg: {
            type: String,
        },
        id: {
            type: String,
        },
        name: {
            type: String,
        },
        item: {
            type: Object
        },
        idx: {
            type: Number
        }
    },
    methods: {
        ...mapMutations(['changeItemState']),
        onChangeChecked: function(e) {
            if (e.target.checked) {
                this.changeItemState({state: 'done', idx: this.idx})
            } else {
                this.changeItemState({state: 'normal', idx: this.idx})
                // change state 반전
            }
        }
    }
}
</script>

<style lang="scss">
    .input-check {
        &.type1 {
            position: relative;
            padding-left: 35px;
            .label-legend {
                font-size: 1.6rem;
                line-height: 2.4rem;
                // padding-left: 3rem;
                margin-bottom: 0.5em;
                &:before,
                &:after {
                    @include pseudoBase();
                    top: 0;
                    // bottom: 0;
                    left: 0;
                    margin: auto;
                }
                &:before {
                    @include itemSize(24px, 24px);
                    background-color: $white;
                    border: 1px solid $grayC;
                    // border-radius: 100%;
                    transition: all .15s;
                }
                &:after {
                    content:"끝";
                    opacity: 0;
                    transition: all .15s;
                    width: 24px;
                    height: 24px;
                    text-align: center;
                    font-size: 10px;
                    color: #ccc;
                }
            }
            :checked + label {
                &:after {
                    opacity: 1;
                }
            }
        }
        
    }
</style>