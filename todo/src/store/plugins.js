import { STORAGE_KEY } from './mutations'

// subscribe 의 트리거는 store가 업데이트 될 때 발생된다.
// 얘가 플러그인 이었어, 이렇게 함수로 보내야했네 모듈화루
const localStoragePlugin = store => {
    store.subscribe((mutation, state) => {
        console.log("subscribe", mutation)
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tmpListData));
    })
}

// [TODO] 왜 배열로 보냈을까 Vuex 예제에서는 찾아보긔
export default [localStoragePlugin]