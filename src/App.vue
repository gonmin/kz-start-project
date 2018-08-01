<template>
  <div id="app">
    dkdk
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
    axios.get('http://www.qdtech.ai/index.php/lexicon/getLexiconList', {
        params: {
          brand_id: 2901,
          page: 1,
          page_size: 100
        }
      })
      .then(function (response) {
        console.log(response.data.data.list)
        var list = response.data.data.list
        var inputs = [
          {
            text: 'yiduo'
          },
          {
            text: 'yingzhidao'
          },
          {
            text: 'kdkkd'
          }
        ]
        var matchResult = []
        var allresult = []
        inputs.forEach(input => {
          var matchBrand = list.find((l, index) => {
            console.log(index)
            return l.rule.some(ru => new RegExp(ru, 'i').test(input.text))
          })
          if (matchBrand) {
            matchResult.push(Object.assign(input, {code: matchBrand.code, text: matchBrand.name}))
            allresult.push(Object.assign(input, {code: matchBrand.code, text: matchBrand.name}))
          } else {
            allresult.push(input)
          }
        })
        console.log(matchResult, allresult)
      })
      .catch(function (error) {
      });
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
#app {
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
