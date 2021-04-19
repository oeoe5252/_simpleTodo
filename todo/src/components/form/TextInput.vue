<template>
    <div class="input-text">
        <input 
            id="id"
            placeholder="placeholder"/>
        <add-btn 
            icon="fi-rr-check"
            btnStyle="add"
            msg="추가버튼"></add-btn>
    </div>
</template>
<script>
import addBtn from '@/components/base/BaseButton.vue'

export default {
    name: 'InputText',
    components: {
        addBtn,
    },
    props: {
        id: {},
        placeholder: {},
    }
}
</script>
<style lang="scss">
    .input-text {
        position: relative;
        margin-bottom: 3rem;
        input {
            @include itemSize(100%, 60px);
            @include box-shadow($defaultShadow...);
            @include border-radius(30px);
            padding: 0 6.5rem 0 3rem;
            background-color: $white50;
        }
    }
</style>