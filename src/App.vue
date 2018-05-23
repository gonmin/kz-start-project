<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
import axios from 'axios'
import HelloWorld from './components/HelloWorld'
import {api} from './lib/api.js'
import {getUrlParam} from './lib/util'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  mounted () {
    let surveyId = getUrlParam('survey_id')
    let finish = getUrlParam('finish')
    console.log([1, 2, 'fanfan'].find(item => item === 'fanfan'))
    axios.post('http://dev_www.qdtech.ai/index.php/shunt/queryShunt', {
      token_id: '6cfae3e860b62d1b95fc583f198d22393bae80a2type1',
      page_size: 20,
      page: 1
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // this.getUaData(surveyId, finish)
  },
  methods: {
    getUaData (surveyId, finish) {
      const that = this
      var params = {
        survey_id: surveyId,
        finish: finish || 0,
        mod: 'matching_ua',
        act: 'user_ua_list'
      }
      api.commonApi(params, function (data) {
        if (data.length === 0) {
        }
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
