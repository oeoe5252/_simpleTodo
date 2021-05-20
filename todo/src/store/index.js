import Vue from 'vue'
import Vuex from 'vuex'
import plugins from './plugins'
import { axiosDefault, } from '@/store/api/BaseAxios'
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
    setTmpListData: (state, payload) => {
      state.tmpListData = payload
    },
    tmpChangeItemState: (state, payload) => {
      state.tmpListData[payload.idx].state = payload.state
    },
    tmpClearItem: (state, payload) => {
      console.log(payload);
      state.tmpListData.splice(payload, 1)
    },

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
    tmpDeleteItem({ commit }, payload) {
      return axiosDefault().delete(`/api/v1/todos/${payload.id}`)
			.then(data => {
        console.log('---data:', data);
        console.log('---payload:', payload);
        commit('tmpClearItem', payload.idx)
			});
    },

    tmpAddItem({ commit }, itemPayload) {
      return axiosDefault().post(`/api/v1/todos/1`, itemPayload)
			.then(data => {
        console.log('---data:', data);
        console.log('---payload:', itemPayload);
        commit('addItems', itemPayload)
				alert(`아이템 추가 성공`);
			});
    },

    // commit 안써주면 payload에 제대로된 전달값이 안넘어옴
    deviceCheck({ commit }, devicePayload) {
      return axiosDefault().get(`/api/v1/todos/${devicePayload}`)
			.then(data => {
        console.log('---data00:', data);
        console.log('---data.data00:', data.data);
        console.log('---payload00:', devicePayload);
        commit('setTmpListData', data.data);
				alert(`기기 체크에 성공했습니다 /api/v1/todos/${devicePayload}`);
        // console.log('아이템 뿌려주기 필요')
			});
    },

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
        console.log("--payload.idx", payload.idx)
        return axiosDefault().patch(`/api/v1/todos/${payload.id}`, { text: `${payload.text}`, state : 2 })
        .then(data => {
          console.log('---ifdata:', data);
          commit('tmpChangeItemState', { state: 2, idx: payload.idx })
        });
      } else {
        console.log("else--payload.idx", payload.idx)

        return axiosDefault().patch(`/api/v1/todos/${payload.id}`, { text: `${payload.text}`, state : 1 })
        .then(data => {
          console.log('---elsedata:', data);
          commit('tmpChangeItemState', { state: 1, idx: payload.idx })
        });
      }
      
      // if (payload.isChecked) {
      //   commit('changeItemState', { state: ITEM_STATE.done, idx: payload.idx })
      // } else {
      //   commit('changeItemState', { state: ITEM_STATE.normal, idx: payload.idx })
      // }
    },
    // A-2: BaseApi 모듈에서 사용 예시(로그인 및 캘린더 정보를 가져오는 api 정의하고 있음.)
    // login(commit, loginPayload) {
    //   return await axiosDefault().post('/login', loginPayload)
    //     .then(data => {
    //       JWT.setToken(data.token);
    //       alert('로그인에 성공했습니다');
    //     });
    // },

    // getCanlendar(commit, page) {
    //   return await axiosAuth().get('/calendars', {
    //     params: { page: page }
    //   })
    //     .then(data => {
    //       commit('getCalendar', data);
    //     });
    // }
  },
  plugins
})

// Vuex.Store를 담고 있는 store 변수 export
export default store