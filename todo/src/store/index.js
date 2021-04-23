import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // 추후 저장된 로컬스테이지 에 전체 데이터를 가지고 있는 키 데이터 fetch + 해당 데이터를 가지고 있는 state객체에 추가되는 item push
    // 기존 로컬 정보 + 추가된 데이터 => 언제 로컬로 저장하지? 해당 타이밍 고민
    tmpListData: [
      {
          idx: 9999,
          chkName: "tmpChk1",
          chkId: "tmpChk1",
          chkText: "Lorem ipsum dolor sit amet,",
          date: "20:21",
          state: "normal"
      },
      {
          idx: 9998,
          chkName: "tmpChk2",
          chkId: "tmpChk2",
          chkText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut",
          date: "20:29",
          state: "normal"
      },
      {
          idx: 9997,
          chkName: "tmpChk3",
          chkId: "tmpChk3",
          chkText: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          date: "21/04/19",
          state: "done"
      }
    ]
  },
  getters: {
    getItems: state => {
      return state.tmpListData
    }
  },
  mutations: {
    addItems: (state, payload) => {
      state.tmpListData.push(payload)
    },
    changeState: (state, payload) => {
      state.tmpListData[payload.i].state = payload.state;
    }
  },
  actions: {
  },
  modules: {
  }
})
