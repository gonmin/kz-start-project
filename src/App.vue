<template>
  <div id="app">
     start
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
  mixins: [landpage],
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
