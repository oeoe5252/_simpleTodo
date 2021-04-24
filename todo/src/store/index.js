import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'

Vue.use(Vuex)

export const STORAGE_KEY = 'todos'

// tmpListData: [
//   {
//     chkId: "tmpChk1",
//     chkText: "Lorem ipsum dolor sit amet,",
//     date: "20:21",
//     state: "normal"
//   },
// ]
// Vuex.Store를 담고 있는 store 변수 export
const store = new Vuex.Store({
  state: {
    tmpListData: JSON.parse(localStorage.getItem(STORAGE_KEY)) || [],
  },
  getters: {
    totalItems: state => {
        return state.tmpListData.length
    },
    doneItems: state => {
        return state.tmpListData.filter(item => item.state == 'done').length
    }
  },
  mutations: {
    addItems: (state, payload) => {
        state.tmpListData.push(payload)
    },
    clearItems: (state, payload) => {
        state.tmpListData.splice(state.tmpListData.indexOf(payload.item), 1)
    },
    clearAllItems: (state) => {
        state.tmpListData = []
    },
    changeItemState: (state, payload) => {
        state.tmpListData[payload.idx].state = payload.state
    },
  },
  plugins
})

export default store
