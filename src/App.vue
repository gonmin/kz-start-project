<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <p class="mao">　1967年《红旗》杂志第12期发表题为《红卫兵赞》的评论员文章。在文章结束的最后口号用语中第一次使用这个口号。后来在一些文章和群众集会中，这个口号曾广为流行。1970年12月18日，毛泽东在接见国际友人埃德加.斯诺时表示对“四个伟大”“讨嫌”，这个口号遂停止使用。它与“敬祝我们心中最红、最红的红太阳毛主席万寿无疆！”以及“伟大领袖毛主席万岁！万岁！万万岁！”等是“文革”中林彪、“四人帮”一伙宣扬毛泽东个人崇拜的典型口号。（人民网） </p>
    <!-- <hello-world></hello-world> -->
    <div>{{age}}</div>
    <slot-study>
      save
    </slot-study>
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
  height: 1200px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  // margin-top: 60px;
}
</style>
