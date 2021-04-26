// [TODO] 정리 된 후 분리하기
import { ITEM_STATE } from '@/store/constants'

export const getters = {
    totalItems: state => {
        return state.tmpListData.length
    },
    doneItems: state => {
        return state.tmpListData.filter(item => item.state == ITEM_STATE.done).length
    }
}