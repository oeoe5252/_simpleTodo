import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import { STORAGE_KEY, ITEM_STATE, SORT_STATE } from '@/store/constants'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tmpListData: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
    sortState: '',
    dayState: '',
  },
  getters: {
    totalItems: state => {
      return state.tmpListData.length
    },
    doneItems: state => {
      return state.tmpListData.filter(item => item.state == ITEM_STATE.done).length
    },
  },
  mutations: {
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
    updateItems: (state, payload) => {
      state.tmpListData = payload
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
    detectDayTime: (state, payload) => {
      console.log("mu day", payload)
      state.dayState = payload
    }
  },
  actions: {
    sortItems({ commit }, payload) {
      commit('changeSortState', payload)

      if (payload === SORT_STATE.asce) {
        commit('sortAsceItems')
      } else if (payload === SORT_STATE.desc) {
        commit('sortDescItems')
      }
    },
    changeItemState({ commit }, payload) {
      if (payload.isChecked) {
        commit('changeItemState', { state: ITEM_STATE.done, idx: payload.idx })
      } else {
        commit('changeItemState', { state: ITEM_STATE.normal, idx: payload.idx })
      }
    }
  },
  plugins
})

// Vuex.Store를 담고 있는 store 변수 export
export default store