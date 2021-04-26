import { DAY_TIME } from '@/store/constants'
export default class NowDate {

    constructor(value) {
        if (typeof (value) == Number) {
            this.tmpDateTime = new Date(value).getTime()
        } else {
            this.tmpDateTime = new Date()
        }
    }

    getYear() {
        return this.tmpDateTime.getYear()
    }

    getMonth() {
        return this.tmpDateTime.getMonth() + 1
    }

    getDay() {
        return this.tmpDateTime.getDate()
    }

    getDayOfWeek() {
        const week = ['일', '월', '화', '수', '목', '금', '토']
        return week[this.tmpDateTime.getDay()]
    }

    getDateTime() {
        return this.tmpDateTime.getTime()
    }

    getHours() {
        return this.tmpDateTime.getHours()
    }

    getMinutes() {
        return `${this.tmpDateTime.getMinutes() < 10 ? `0${this.tmpDateTime.getMinutes()}` : this.tmpDateTime.getMinutes()}`
    }

    getSeconds() {
        return `${this.tmpDateTime.getSeconds() < 10 ? `0${this.tmpDateTime.getSeconds()}` : this.tmpDateTime.getSeconds()}`
    }

    detectDayTime() {
        if (this.getHours() >= 4 && this.getHours() < 12) {
            console.log("mo", this.getHours())
            this.daytime = DAY_TIME.morning
        } else if (this.getHours() >= 12 && this.getHours() < 18) {
            console.log("af", this.getHours())
            this.daytime = DAY_TIME.afternoon
        } else {
            console.log("ev", this.getHours())
            this.daytime = DAY_TIME.evening
        }

        return this.daytime
    }

    /**
     * @param {*} value : type1: MM/DD
     */
    changeDateFormat(value = "type1") {
        let result = ""
        switch (value) {
            case 'type1':
                result = this.getMonth() + "/" + this.getDay()
                break
            case 'type2':
                result = this.getHours() + ":" + this.getMinutes() + ":" + this.getSeconds()
                break
            case 'type3':
                result = this.getMonth() + "/" + this.getDay() + this.getHours() + ":" + this.getMinutes()
        }
        return result
    }

}