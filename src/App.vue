<template>
  <div id="app">
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld'
import slotStudy from './components/slotStudy.vue'
import {api} from './lib/api.js'
import {getUrlParam} from './lib/util'
import util from './lib/util'
import landpage from './mixins/landpage.js'
import 'swiper/dist/css/swiper.min.css'
import swiperConfig from './config/swiperConfig.js'
import Swiper from 'swiper'

export default {
  // mixins: [landpage],
  name: 'App',
  data () {
    return {
      age: 30
    }
  },
  components: {
    HelloWorld,
    slotStudy
  },
  mounted () {
    console.log([1, 2, 'fanfan'].find(item => item === 'fanfan'))
    var params = {
      token_id: '309bfffb9b64724760a43ef9d579f0eb9ad545datype1',
      survey_id: 24630300
    }
    var params1 = {
      token_id: '309bfffb9b64724760a43ef9d579f0eb9ad545datype1',
      survey_id: 210601
    }
    var params2 = {
      token_id: '309bfffb9b64724760a43ef9d579f0eb9ad545datype1',
      survey_id: 214301
    }
    api.promiseCommonApi(params).then(data => {
      console.log(data, 'promise 第一个接口')
    }, err => {
      console.log(err)
    })
    .catch(err => {
      debugger
      console.log(err)
    })
    .finally(() => {
      console.log('执行fanally')
    })
    // .then(api.promiseCommonApi(params1).then(data1 => {
    //   console.log(data1, 'data1', '第二个接口')
    // }))
    // .then(api.promiseCommonApi(params2).then(data2 => {
    //   console.log(data2, 'data1', '第三个接口')
    // }))

    // api.promiseCommonApi(params2).then(api.promiseCommonApi(params1))
    // .then(api.promiseCommonApi(params))
    // .then(data => {
    //   console.log(data)
    // })
    // Promise.all([api.promiseCommonApi(params2), api.promiseCommonApi(params1)]).then((data) => {
    //   console.log(data, 'kkgggkk')
    //   api.promiseCommonApi(params)
    // })
  },
  methods: {
  }
}
</script>

<style lang="less">
@import './assets/css/normalize';

.text-overflow() {
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.box {
  position: relative;
  width: 300px;
  height: 300px;
  background-color: red;
  .word {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }
}
.mao {
  .text-overflow;
  height: 400px;
}

#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
