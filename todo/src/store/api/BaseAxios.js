// A-1: BaseAxios: aseAxios는 axios instance와 설정, Interceptor 들을 정의 샘플
// import axios, { AxiosInstance } from 'axios';
// import { Token } from 'utils.ts';

// const DEFAULT_HEADERS = {
//     'Content-Type': 'application/json',
//     'Access-Controll-Allow-Origin': '*'
// }

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

// const BASE_URL = 'http://api.localhost.io'

// function responseInterceptors(axiosInst: AxiosInstance) {
//     axiosInst.interceptors.response.use(
//         function (response) {
//             // 다른 정보를 무시하고 data 본문만을 리턴
//             return response.data;
//         },
//         function (error) {
//             // 인증 만료
//             if (error.response.status === 403) {
//                 return Promise.reject({
//                     code: 403,
//                     message: '인증 기간이 만료 되었습니다.'
//                     // 인증 정보 불일치
//                 } else if (error.response.status === 401) {
//                     return Promise.reject({
//                         code: 401,
//                         message: '인증 정보가 없습니다.'
//                     });
//                 }
//             }
// 	)

//     return axiosInst;
// }

// // 인증이 필요 없는 기본 통신 axios instance
// export function axiosDefault() {
//     return responseInterceptors(
//         axios.create({
//             baseURL: BASE_URL,
//             headers: DEFAULT_HEADERS,
//         })
//     )
// }

// // 인증이 필요한 api에 대한 axios instance
// export function axiosAuth() {
//     return responseInterceptors(
//         axios.create({
//             baseURL: BASE_URL,
//             headers: AUTH_HEADERS
//         })
//     )
// }

// // form 전송을 위한 axios instance
// export function axiosFormData() {
//     return responseInterceptors(
//         axios.create({
//             baseURL: BASE_URL,
//             headers: AUTH_FORM_HEADERS
//         })
//     )
// }