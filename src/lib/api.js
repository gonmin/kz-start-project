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
  getHostName: function () {
    var host = location.hostname === 's.qdtech.ai' ? location.host : 'dev.s.qdtech.ai';
    console.log('location.host', location.hostname, 'host', host)
    return 'http://' + host + '/project/php_pcp/index.php'
  }
}