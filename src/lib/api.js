import axios from 'axios'
import 'es6-promise/auto'

export const api = {
  commonApi: function (params, fn, fnErr) {
    var hostname = this.getHostName();
    axios.get(hostname, {
        params: params
      })
      .then(function (response) {
        typeof fn === 'function' && fn(response.data)
      })
      .catch(function (error) {
        typeof fnErr === 'function' && fnErr(error)
      });
  },
  promiseCommonApi: function (params) {
    var hostname = this.getHostName();
    return new Promise((resolve, reject) => {
      axios.get(hostname, {
        params: params
      })
      .then(function (response) {
        if (response.data.code === 0) {
          console.log(response, '接口的结果')
          resolve(response.data)
        } else {
          throw new Error(response.data.message)
        }
      })
      .catch(function (error) {
        resolve(error)
      });
    })
    
  },
  getHostName: function () {
    var host = location.hostname === 's.qdtech.ai' ? location.host : 'dev.s.qdtech.ai';
    host = 'dev_www.qdtech.ai'
    console.log('location.host', location.hostname, 'host', host)
    return 'http://' + host + '/index.php/survey/viewSurvey'
  }
}