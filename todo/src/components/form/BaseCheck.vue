<template>
    <div class="input-check type1">
        <input 
            :id="idid"
            type="checkbox"
            :name="name"
            :checked="item.state === 2"
            @change="onChangeChecked" />
        <label 
            :for="idid"
            class="label-legend"
            :class="[{done: item.state === 2}]"> 
            <span>{{ item.state }} - {{msg}}</span> </label>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
    name: 'BaseCheck',
    props: {
        msg: {
            type: String,
        },
        idid: {
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
        ...mapActions(["changeItemState"]),
        onChangeChecked: function(e) {
            // this.changeItemState({isChecked: e.target.checked, idx: this.idx})
            this.changeItemState({isChecked: e.target.checked, text: this.item.text, id: this.item.id, idx: this.idx})
        },

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
                margin-bottom: 0.5em;
                span {
                    transition: all .3s ease;
                }
                &.done {
                    span {
                        color: $grayC;
                        text-decoration: line-through;
                    }
                }
                &:before,
                &:after {
                    @include pseudoBase();
                    top: 0;
                    left: 0;
                    margin: auto;
                }
                &:before {
                    @include itemSize(24px, 24px);
                    background-color: $white;
                    border: 1px solid $grayC;
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