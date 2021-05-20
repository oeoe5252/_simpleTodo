# todo

## Guide
---
1. 코딩 스티일
> `;`: 사용 안함  
> `tab-size`, `indent-size`: 4  

2. [TODO] 앞으로 더 생각해볼 것
> 수정 기능 (수정 날짜 필요 등...)
> 컴포넌트 폴더 정리(다 TODO로 다 TODO만 쓰는 애들이네 보니깐)
> 정렬 완료된 순, ㄱㄴㄷ 순
> 하루 지나면 HH:MM 에서 날이 지나면 MM/DD(day) 로 뜨게
> 모션 효과
> 각 모듈 파일로 분리 시험

3. [NOTE] Axios
> interceptors 문법(use)
> Promise 문법
> patch API 형식에 안맞으면 false 뜸. state만 바꾸려고 했는데 text까지 같이 받아야 오류 안뜸
```
.get(`/api/v1/todos/`,{
	params: {
		userId: devicePayload
	}
})

결과 
url/?userId={~~~}


```

--
## Axios 통한 Backend API 호출

[NOTE] : A-# 으로 넘버링 해놨음(A-1 ~ A-3)

- url : http://api.stickinteractive.com  

### API Table
| 메소드 | 경로 | 비고 |
|---|:---:|:---:|
| `GET` | /api/v1/todos/{userId} | userId 의 식별값을 가지고 todo 리스트를 가져옵니다. | 
| `POST` | /api/v1/todos/{userId} | * REQUEST 참조 : 투두리스트 생성 |
| `PATCH` | /api/v1/todos/{Id} | userId가 아닌 id의 식별값으로 업데이트 합니다. |
| `DELETE` | /api/v1/todos/{Id} | userId가 아닌 id의 식별값으로 삭제합니다.  |

```
// EX: GET/api/v1/todos/{userId}
{
	"success": "Boolean",
	"data": [
		{
			"id": "Number",        // 할일 아이디
			"text": "String",      // 할일 내용
			"state": "Number",     // 1: 미완료 2: 완료
			"created_at": "String" // 생성일
			"updated_at": "String" // 수정일
		}
	]
}

```

### REQUEST
```
POST todos
{
	"text": "String"
}
```

### RESPONSE
```
{
	"succese": "Boolean"
	"message": "String"
	"data": "Array"
}
```



---
## 참고
> [MDN:Global_Objects/Array/sort](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)  
> [MDN:Global_Objects/Array/indexOf](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)  
> [MDN:Global_Objects/Object/assign](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)  
> [localStorage&Vuex](https://www.mikestreety.co.uk/blog/vue-js-using-localstorage-with-the-vuex-store/)  
> [Vuex:example](https://github.com/vuejs/vuex)

## 노션 기록
> 정리로그 - [self] 투두리스트  

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
