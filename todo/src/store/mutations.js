// [TODO] 정리 된 후 분리하기
// [NOTE] 찾아보니 mutation은 상수로 많이 쓰더라... 대문자화 고믠
import { SORT_STATE } from '@/store/constants'

export const mutations = {
    addItems: (state, payload) => {
        if (state.sortState == SORT_STATE.asce) {
          state.tmpListData.push(payload)
        } else {
          state.tmpListData.unshift(payload)
        }
    },
    clearItems: (state, payload) => {
        state.tmpListData.splice(state.tmpListData.indexOf(payload.item), 1)
    },
    clearAllItems: state => {
        state.tmpListData = []
    },
    changeItemState: (state, payload) => {
        state.tmpListData[payload.idx].state = payload.state
    },
    changeSortState: (state, payload) => {
      state.sortState = payload
    },
    sortAsceItems: (state) => {
      state.tmpListData.sort((a, b) => {
        if (a.date > b.date) {
          return 1;
        }
        if (a.date < b.date) {
          return -1;
        }
        return 0;
      })
    },
    sortDescItems: (state) => {
      state.tmpListData.sort((a, b) => {
        if (a.date < b.date) {
          return 1
        }
        if (a.date > b.date) {
          return -1
        }
        return 0
      })
    },
}