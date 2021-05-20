// A-1: BaseAxios: aseAxios는 axios instance와 설정, Interceptor 들을 정의 샘플
import axios from 'axios';
// import { Token } from 'utils.ts';

// Default 헤더 정보 기재
// content-type은 json 이구
// 모든경우 허용
const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Controll-Allow-Origin': '*'
}

// const AUTH_HEADERS = {
//     'Content-Type': 'application/json',
//     'Access-Controll-Allow-Origin': '*',
//     'Authorization': Token.getToken()
// }

// const FORM_HEADERS = {
//     'Content-Type': 'multipart/form-data',
//     'Accept': 'application/json',
//     'Access-Controll-Allow-Origin': '*',
//     'Authorization': Token.getToken()
// }

// 다사용 base url 설정
const BASE_URL = 'http://api.stickinteractive.com'

// 응답가로채어 재가공(axios 인스턴스를 매개로 전달 받음)
function responseInterceptors(axiosInst) {
    axiosInst.interceptors.response.use(
        function (response) {
            console.log("---response:", response)
            // 다른 정보를 무시하고 data 본문만을 리턴
            return response.data;
        },
        function (error) {
            if (error.response.status === 403) {
                // 인증 만료
                return Promise.reject({
                    code: 403,
                    message: '인증 기간이 만료 되었습니다.',
                    
                });
             } else if (error.response.status === 401) {
                 // 인증 정보 불일치
                return Promise.reject({
                    code: 401,
                    message: '인증 정보가 없습니다.'
                });
            }
        }
    )

    // 가로채어 수정된 promise 정보를 보냄
    return axiosInst;
}

// 인증이 필요 없는 기본 통신 axios instance
export function axiosDefault() {
    // axios 인스턴스 전달
    // responseInterceptors 에서 response.data를 반환 받거나, error Promise를 반환받음
    return responseInterceptors(
        axios.create({
            baseURL: BASE_URL,
            headers: DEFAULT_HEADERS,
        })
    )
}

// 인증이 필요한 api에 대한 axios instance
// export function axiosAuth() {
//     return responseInterceptors(
//         axios.create({
//             baseURL: BASE_URL,
//             headers: AUTH_HEADERS
//         })
//     )
// }

// form 전송을 위한 axios instance
// export function axiosFormData() {
//     return responseInterceptors(
//         axios.create({
//             baseURL: BASE_URL,
//             headers: AUTH_FORM_HEADERS
//         })
//     )
// }