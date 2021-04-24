<template>
    <div class="input-select">
        <label :for="id" class="sr-only"> {{ msg }} </label>
        <select :id="id" :name="id">
            <!-- [TODO] 넘겨받은 인자 반복 -->
            <option value="asce">오름차순</option>
            <option value="desc">내림차순</option>
            <!-- [TODO] 완료한 시간도 추후 받기 -->
            <option value="done">완료된순</option>
        </select>
    </div>
</template>
<script>
export default {
    name: 'BaseSelect',
    props: {
        msg: {
            type: String,
            default: '선택박스'
        },
        id: {
            type: String,
        }
    },
    methods: {
        // 선택된 값에 따라 state를 바꾸는 정렬 mutation 호출
        // changeOption() { }
    }
}
</script>
<style lang="scss">
    
</style>