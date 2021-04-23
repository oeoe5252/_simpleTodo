import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const STORAGE_KEY = 'todos-vuejs'

// Vuex.Store를 담고 있는 store 변수 export
const store = new Vuex.Store({
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
    ],
    tmpCount: ""
  },
  getters: {
    totalItems: state => {
      return state.tmpListData.length
    }
  },
  mutations: {
    addItems: (state, payload) => {
      state.tmpListData.push(payload)
    },
    changeItemState: (state, payload) => {
      state.tmpCount = payload.text
      console.log("changeItemState-------------", state.tmpCount)
      // state.tmpListData[payload.i].state = payload.state;
    },
    initialiseStore: (state) => {
      // Check if the ID exists
      console.log("initialiseStore", state)
      if (localStorage.getItem(STORAGE_KEY)) {
        // Object.assign(담을객체, 원본객체) :: 원본 객체를 담을 객체로 속성을 복사해준다
        // 담을 객체랑 원본객체의 키가 같을 경우, 담을 객체가 원본 객체의 속성값으로 덮어진다.
        // 저장소의 루트 상태를 바꿉니다.상태에 대한 상호작용 / 시점 변경 목적으로 만 사용하십시오
        Object.assign(state.tmpListData, JSON.parse(localStorage.getItem(STORAGE_KEY)))
        // this.replaceState 얘는 에러나넹... 사이트 따라했는뒙...
        // this.replaceState(
        //    Object.assign(state.tmpListData, JSON.parse(localStorage.getItem(STORAGE_KEY)))
        // );
      } else {
        console.log(state.tmpCount)
        console.log("nothing")
      }
    }
  }
})

// state 상태 변경 될 때 트리거 발생
// state안에 있는 모든게 변경될때 발생하는지 확인해야하는데, 왜 tmpList 말구 나머진 안먹즤? 있는데 값은...?? mutataion이 안데 내가 뭘 잘못했겠지 정리를 못해성
// 모든 state 상태가 변할 때 발생한다. muataion 모두 발생하네, 근데 왜 컴포넌트에서 발행한 mutation은 안들어가지지???  왜 main.js에서 발생한것만 되는거야!!!!!!!!!
store.subscribe((mutation, state) => {
  console.log("what subscribe", mutation)
  // mutation에 "initialiseStore" 하나 밖에 없넹??? 왜??
  // Store the state object as a JSON string
  // 모든 상태에서 트리거가 발생하니깐, 모든 상태변경이 발생할때마다 굳이 localstorage에 state.tmpListData 정보를 담을 필요가 없으므로 
  if (mutation.type === 'addItems') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tmpListData));
  }
});

export default store
