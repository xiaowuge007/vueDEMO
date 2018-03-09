<template>
  <div>
    <span class="date-component">
      <input @blur="dateBlur" @focus="dateFocus" type="text" style="width:200px" v-model="currentDay" class="form-control" >
      <div @mouseenter="dateEnter" @mouseleave="dateLeave" class="dateContainer" v-show="dateContainer">
        <div class="date-all" v-show="dateAll">
          <table>
            <thead>
            <tr>
              <th @click="prev" class="prev-month"><span class="glyphicon glyphicon-arrow-left"></span></th>
              <th colspan="5">
                <span @click="showYear" class="current-year">{{currentYear}}</span>-
                <span @click="showMonth" class="current-month">{{currentMonth}}</span>
              </th>
              <th @click="next" class="next-month"><span class="glyphicon glyphicon-arrow-right"></span></th>
            </tr>
            <tr>
              <th>日</th>
              <th>一</th>
              <th>二</th>
              <th>三</th>
              <th>四</th>
              <th>五</th>
              <th>六</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="week in list">
              <td v-for="weekday in week"
                  v-bind:class = "{ active: weekday.name === currentDate}"
                  @mousedown ="changeDate(weekday.name)"
              >
                {{weekday.value}}
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="date-year" v-show="dateYear">
          <table>
            <thead>
            <tr>
              <th @click="prevYear" class="prev-month"><span class="glyphicon glyphicon-arrow-left"></span></th>
              <th colspan="5"><span >{{startYear}}</span>-<span >{{endYear}}</span></th>
              <th @click="nextYear" class="next-month"><span class="glyphicon glyphicon-arrow-right"></span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td colspan="7">
                <span v-for="year in yearList"
                  v-bind:class="{'active':year === currentYear, 'oldYear': year < startYear || year > endYear}"
                  @click="changeYear(year)"
                >{{year}}</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="date-month" v-show="dateMonth">
          <table>
            <thead>
            <tr>
              <th @click="prevMonth" class="prev-month"><span class="glyphicon glyphicon-arrow-left"></span></th>
              <th colspan="5"><span >{{currentYear}}</span>-<span >{{currentMonth}}</span></th>
              <th @click="nextMonth" class="next-month"><span class="glyphicon glyphicon-arrow-right"></span></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td colspan="7">
                <span v-for="month in monthList"
                      v-bind:class="{'active':month == currentMonth}"
                      @click="changeMonth(month)"
                >{{month}}月</span>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </span>
  </div>
</template>

<script>
  Date.prototype.format = function (fmt) {
    var o = {
      'M+': this.getMonth() + 1,
      'd+': this.getDate(),
      'h+': this.getHours(),
      'm+': this.getMinutes(),
      's+': this.getSeconds(),
      'q+': Math.floor((this.getMonth() + 3) / 3),
      'S': this.getMilliseconds()
    }
    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
      }
    }
    return fmt
  }
  export default {
    props: {
      currentTime: {
        type: String,
        default: ''
      }
    },
    data () {
      return {
        currentDay: this.currentTime,
        currentDate: (new Date).format('yyyy-MM-dd'),
        dateContainer: false,
        dateAll: true,
        dateYear: false,
        dateMonth: false,
        outer: true,
        monthList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
      }
    },
    mounted () {

    },
    watch: {
      currentDay (newVal) {
        this.$emit('update:currentTime', newVal)
      }
    },
    computed: {
      currentYear () {
        var year = (new Date(this.currentDate)).getFullYear()
        return year
      },
      currentMonth () {
        var month = (new Date(this.currentDate)).getMonth()
        month = month + 1
        if (month < 10) {
          month = '0' + month
        }
        return month
      },
      startYear () {
        var year = (new Date(this.currentDate)).getFullYear()
        var startYear = year - (year % 10)
        return startYear
      },
      endYear () {
        var year = (new Date(this.currentDate)).getFullYear()
        var endYear = year - (year % 10) + 9
        return endYear
      },
      yearList () {
        var yearList = []
        var year = (new Date(this.currentDate)).getFullYear()
        var startYear = year - (year % 10) - 1
        var endYear = year - (year % 10) + 10
        for (let i = startYear; i <= endYear; i++) {
          yearList.push(i)
        }
        return yearList
      },
      list () {
        var selectDate = new Date(this.currentDate)
        var lists = []
        var curYear = selectDate.getFullYear()
        var curMonth = selectDate.getMonth()
        var curMonthDays = (new Date(curYear, curMonth + 1, 0)).getDate()
        var curDay = (new Date(curYear + '-' + (curMonth + 1) + '-' + 1)).getDay()
        if (curDay === 0) {
          curDay = 7
        }
        var prevMonthDays = (new Date(curYear, curMonth, 0)).getDate()
        var nextDay = 42 - curMonthDays - curDay
        var prevYear = curYear
        var prevMonth = curMonth - 1
        var nextYear = curYear
        var nextMonth = curMonth + 1
        if (curMonth === 0) {
          prevYear = prevYear - 1
          prevMonth = 11
        }
        if (curMonth === 11) {
          nextYear = nextYear + 1
          nextMonth = 0
        }
        function monthTrans (num) {
          if (num < 10 && num >= 0) {
            num = '0' + num
          }
          return num
        }
        for (let i = prevMonthDays - curDay + 1; i <= prevMonthDays; i++) {
          lists.push({
            name: prevYear + '-' + monthTrans(prevMonth + 1) + '-' + i,
            value: i
          })
        }
        for (let m = 1; m <= curMonthDays; m++) {
          let name
          if (m < 10) {
            name = curYear + '-' + monthTrans(curMonth + 1) + '-0' + m
          } else {
            name = curYear + '-' + monthTrans(curMonth + 1) + '-' + m
          }
          lists.push({
            name: name,
            value: m
          })
        }
        for (let j = 1; j <= nextDay; j++) {
          let name
          if (j < 10) {
            name = nextYear + '-' + monthTrans(nextMonth + 1) + '-0' + j
          } else {
            name = nextYear + '-' + monthTrans(nextMonth + 1) + '-' + j
          }
          lists.push({
            name: name,
            value: j
          })
        }
        var arr = []
        for (let n = 0; n < lists.length; n++) {
          if (n % 7 === 0) {
            arr.push([])
          }
          arr[arr.length - 1].push(lists[n])
        }
        return arr
      }
    },
    methods: {
      dateEnter: function () {
        this.outer = false
      },
      dateLeave: function () {
        this.outer = true
      },
      dateFocus: function () {
        let rule = /^\d{1,}-((0[1-9]{1})|(1[0-2]{1}))-((0[1-9]{1})|([1-2]{1}\d{1})|(3[0-1]{1}))$/
        if (rule.test(this.currentDay)) {
          var date = this.currentDay
          var m = date.split('-')[1]
          var d = date.split('-')[2]
          if (((m == 1) || (m === 3) || (m == 5) || (m== 7) || (m == 8) || (m == 10) || (m == 12)) && d <= 31) {
            this.currentDate = this.currentDay
          } else {
             if (m == 2 && d <= 28) {
               this.currentDate = this.currentDay
             } else {
                 if (d <= 30) {
                   this.currentDate = this.currentDay
                 }
             }
          }
        }
        this.dateContainer = true
      },
      dateBlur: function () {
        if (this.outer) {
          this.dateContainer = false
        }
      },
      prev: function () {
        var selectDate = new Date(this.currentDate)
        var year = selectDate.getFullYear()
        var month = selectDate.getMonth()
        var day = selectDate.getDate()
        if (month === 0) {
          month = 12
          year = year - 1
        }
        if (month < 10) {
          month = '0' + month
        }
        this.currentDate = year + '-' + month + '-' + day
      },
      next: function () {
        var selectDate = new Date(this.currentDate)
        var year = selectDate.getFullYear()
        var month = selectDate.getMonth()
        var day = selectDate.getDate()
        month = month + 1
        if (month === 12) {
          month = 0
          year = year + 1
        }
        month = month + 1
        if (month < 10) {
          month = '0' + month
        }
        this.currentDate = year + '-' + month + '-' + day
      },
      changeDate: function (name) {
        this.currentDate = name
        this.currentDay = name
        this.dateContainer = false
      },
      changeYear: function (year) {
        var changeY = this.currentDate
        changeY = changeY.split('-')
        changeY[0] = year
        this.currentDate = changeY.join('-')
        this.dateAll = true
        this.dateYear = false
      },
      showYear: function () {
        debugger
        this.dateAll = false
        this.dateYear = true
      },
      prevYear: function () {
        var changeY = this.currentDate
        changeY = changeY.split('-')
        changeY[0] = changeY[0] - 10
        this.currentDate = changeY.join('-')
      },
      nextYear: function () {
        var changeY = this.currentDate
        changeY = changeY.split('-')
        changeY[0] = parseInt(changeY[0]) + 10
        this.currentDate = changeY.join('-')
      },
      showMonth: function () {
        this.dateAll = false
        this.dateMonth = true
      },
      prevMonth: function () {
        var changeY = this.currentDate
        changeY = changeY.split('-')
        changeY[0] = parseInt(changeY[0]) - 1
        this.currentDate = changeY.join('-')
      },
      nextMonth: function () {
        var changeY = this.currentDate
        changeY = changeY.split('-')
        changeY[0] = parseInt(changeY[0]) + 1
        this.currentDate = changeY.join('-')
      },
      changeMonth: function (month) {
        var changeY = this.currentDate
        changeY = changeY.split('-')
        changeY[1] = month
        this.currentDate = changeY.join('-')
        this.dateAll = true
        this.dateMonth = false
      }
    }
  }
</script>
<style>
  .date-component{
    position: relative;
  }
  .dateContainer{
    min-width:220px;
    max-width:240px;
    position: absolute;
    padding: 4px;
    margin-top: 1px;
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.2);
    z-index: 9999;
  }
  .date-all td,.date-all th{
    padding: 4px 5px;
    text-align: center;
    width: 20px;
    height: 20px;
    box-sizing:content-box;
    -moz-box-sizing:content-box; /* Firefox */
    -webkit-box-sizing:content-box;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
  }
  .date-all td:hover{
    background-color: #ddd;
  }
  .date-all td.active,.date-year table td span.active,.date-month table td span.active{
    background-color: #0044cc;
    background-color: #006dcc;
    background-image: -moz-linear-gradient(top, #0088cc, #0044cc);
    background-image: -ms-linear-gradient(top, #0088cc, #0044cc);
    background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#0088cc), to(#0044cc));
    background-image: -webkit-linear-gradient(top, #0088cc, #0044cc);
    background-image: -o-linear-gradient(top, #0088cc, #0044cc);
    background-image: linear-gradient(top, #0088cc, #0044cc);
    background-repeat: repeat-x;
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);
    border-color: #0044cc #0044cc #002a80;
    border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
    filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
    color: #fff;
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  }
  .dateContainer table{
    margin: 0;
  }
  .current-year {
    margin-right:5px;
  }
  .current-month {
    margin-left: 5px;
  }
  .current-year:hover,.current-month:hover{
    color: #1d8ce0;
    text-decoration: underline;
  }
  .date-year table td span,.date-month table td span{
    display: block;
    width: 23%;
    height: 54px;
    text-align: center;
    line-height: 54px;
    float: left;
    margin: 1%;
    cursor: pointer;
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
  }
  .date-year td,.date-year th,.date-month th{
    text-align: center;
  }
  .date-year table td span:hover,.date-month table td span:hover{
    background-color: #ddd;
  }
  .date-year table td span.oldYear{
    color: #999;
  }
</style>
