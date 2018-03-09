<template>
  <div>
    这里是报表管理
    <button class="btn btn-default" @click="getLid">获取</button>
    <Select-list :lis="list" :kw="lid" @select-change="selItem"></Select-list>
    <div style="height:30px"></div>
    <date-component :currentTime="time" @update:currentTime="val => time = val"></date-component>
  </div>
</template>

<script>
  import SelectList from '../../components/select.vue'
  import dateComponent from '../../components/date.vue'
  export default {
    components: {SelectList,dateComponent},
    data () {
      return {
        lid: '',
        time: '',
        list: [
          {
            name: 1,
            text: '列表1111111'
          },
          {
            name: 2,
            text: '列表2'
          },
          {
            name: 3,
            text: '列表23'
          },
          {
            name: 4,
            text: '列表14'
          },
          {
            name: 5,
            text: '列表5'
          }
        ]
      }
    },
    created () {
      console.log(this.$route)
    },
    methods: {
      getLid: function () {
        alert(this.time)
      },
      selItem: function (name, text) {
        this.lid = text
      }
    }
  }
</script>
