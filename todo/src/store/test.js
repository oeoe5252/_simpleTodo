import store from './store'
import { STORAGE_KEY } from './store'

// subscribe 의 트리거는 store가 업데이트 될 때 발생된다.
store.subscribe((mutation, state) => {
    console.log("subscribe")
    // Store the state object as a JSON string
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tmpListData));
});