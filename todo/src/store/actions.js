// 컴포넌트에서 mutation 쓸때 commit 쓰는데 복잡한 로직이 추가될때 컴포넌트에서 가공한후 commit 하는게 아니라 데이터 처리는 action이 하게 하고 vue 컴포넌트에는 가공된 action 데이터만 뿌리게끔 하는것 
import { SORT_STATE, ITEM_STATE } from '@/store/constants'

export const actions = {
    sortItems ({ commit }, payload) {
        commit('changeSortState', payload)
  
        if (payload === SORT_STATE.asce) {
          commit('sortAsceItems')
        } else if (payload === SORT_STATE.desc) {
          commit('sortDescItems')
        }
      },
      changeItemState ({ commit }, payload) {
        if( payload.isChecked ) {
          commit('changeItemState', {state: ITEM_STATE.done, idx: payload.idx})
        }else {
          commit('changeItemState', {state: ITEM_STATE.normal, idx: payload.idx})
        }
      }
}