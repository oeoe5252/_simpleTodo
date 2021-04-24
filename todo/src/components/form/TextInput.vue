<template>
    <div class="input-text">
        <input 
            type="text"
            :id="id"
            :placeholder="placeholder"
            v-model="todoTextData"
            @keyup.enter="addItem" />
        <add-btn 
            icon="fi-rr-check"
            btnStyle="add"
            msg="추가버튼"
            @addItem="addItem"></add-btn>
    </div>
</template>
<script>
import addBtn from '@/components/base/BaseButton.vue'
import CurrentDate from '@/assets/js/dateTime.js'
import { mapMutations } from 'vuex'

export default {
    name: 'InputText',
    components: {
        addBtn,
    },
    computed: {
        makeTimeId(time) {
            return "id" + time
        }
    },
    data() {
        return {
            idx: 0,
            todoTextData: "",
            chkName: "",
            chkId: "",
            chkText: "",
            date: "",
            state: ""
        }
    },
    props: {
        id: {
            type: String,
        },
        placeholder: {
            type: String,
        },
        value: {
            type: String,
        }
    },
    methods: {
        ...mapMutations(['addItems']),
        // onInputUpdate: function(e) {
        //     this.$emit('input', e.target.value);
        // },
        addItem: function() {
            
            if(this.todoTextData !== "") {
                let itemObj = {
                    chkId: "id-" + CurrentDate.getNowTime(),
                    chkText: this.todoTextData,
                    date: CurrentDate.getNowTime(),
                    state: "normal"
                }
                this.addItems(itemObj)
                this.clearText()
            } else {
                window.alert(this.placeholder)
            }
        },
        clearText: function() {
            // 이렇게 쓰면 안됨, 우선 나는 v-model 값은 부모에 있고 해당 부분에서 value를 수정하기 떄문이 이렇게 되면 나는 부모의 value를 수정하는 거다.
            // input text 영역을 다음에 쓸 거 같아서 v-model도 밖으로 뱄는데, 우선 안으로 넣어야겠다. value 수정하기 위해(안에 넣으면, v-model 값이 하나이기 때문에 재사용을 못할 거 같아서), v-model을 안으로 넣으니, 굳이 onInputUpdate 이벤트를 발생시킬 필요도 없네. 그리고, v-model 쓰면  this.value에 접근할 필요 없고(어짜피 해당 input 의 value는 무시되므로), v-model 값을 지워주면 그 안에서 알아서 value값을 갱신시켜주니깐.
            this.todoTextData = ""
        },
        localPlainSave: function() {
            // 개발자도구 localstorage 섹션 확인
            // localStorage.setItem(key, value)
            localStorage.setItem(this.todoTextData, this.todoTextData);
        },
        localObjSave: function(item) {
            // 개발자도구 localstorage 섹션 확인
            // localStorage.setItem(key, value)
            // 해당 키에 값으로 객체를 대입.
            // 굳이 한 unit 데이터를 로컬에 담을 필요가 없을듯.
            // 우선 state에서 로컬에서 전체데이터를 가지고 있는 키로 전체 데이터를 담고, 해당 전체 데이터에 해당 아이템을 state에 push, 
            localStorage.setItem('todoUnitData', JSON.stringify(item));
        }
    },
}
</script>
<style lang="scss">
    .input-text {
        position: relative;
        margin-bottom: 3rem;
        // [NOTE] 그냥 input으로만 쓰면 안된다!,
        [type="text"] {
            @include itemSize(100%, 60px);
            @include box-shadow($defaultShadow...);
            @include border-radius(30px);
            padding: 0 6.5rem 0 3rem;
            background-color: $white50;
        }
    }
</style>