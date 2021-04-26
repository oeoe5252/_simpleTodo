import { STORAGE_KEY } from '@/store/constants'

// [NOTE] subscribe 의 트리거는 store가 업데이트 될 때 발생된다.
const localStoragePlugin = store => {
    store.subscribe((mutation, state) => {
        console.log("subscribe", mutation)
        if(mutation.type !== "detectDayTime" || mutation.type !== "changeSortState") {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state.tmpListData))
        }
    })
}

// [TODO] 왜 배열로 보냈을까 Vuex 예제에서는 찾아보긔
export default [localStoragePlugin]