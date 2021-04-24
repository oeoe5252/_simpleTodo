<template>
    <div class="input-select">
        <label :for="id" class="sr-only"> {{ msg }} </label>
        <select :id="id" :name="id" v-model="selected" @change="onChangeSort">
            <option :value="DESC">최신순</option>
            <option :value="ASCE">과거순</option>
            <!-- [TODO] 완료한 시간도 추후 받기 -->
            <!-- [TODO] ㄱㄴㄷ 순으로하면 자료구조 생각해야겟지? 중간에 넣어야하니깐? -->
            <option :value="ASCE">아즥: 완료된순</option>
        </select>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
//asset으로 옮기니깐 안되넹... 뭐가 다른가..?
import { SORT_STATE } from '@/store/constants'

export default {
    name: 'BaseSelect',
    data() {
        return {
            selected: SORT_STATE.desc,
            ASCE: SORT_STATE.asce,
            DESC: SORT_STATE.desc
        }
    },
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
        ...mapActions(["sortItems"]),

        onChangeSort() {
            this.sortItems(this.selected)
        }
        
    }
}
</script>
<style lang="scss">
    
</style>