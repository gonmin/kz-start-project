export var getUrlParam =  function (name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var result = window.location.search.substr(1).match(reg);
  return result ? decodeURIComponent(result[2]) : null;
}


export function getScrollTop(){
　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
　　if(document.body){
　　　　bodyScrollTop = document.body.scrollTop;
　　}
　　if(document.documentElement){
　　　　documentScrollTop = document.documentElement.scrollTop;
　　}
　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
　　return scrollTop;
}

//文档的总高度

export function getScrollHeight(){
　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
　　if(document.body){
　　　　bodyScrollHeight = document.body.scrollHeight;
　　}
　　if(document.documentElement){
　　　　documentScrollHeight = document.documentElement.scrollHeight;
　　}
　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
　　return scrollHeight;
}

//浏览器视口的高度
export function getWindowHeight(){
　　var windowHeight = 0;
　　if(document.compatMode == "CSS1Compat"){
　　　　windowHeight = document.documentElement.clientHeight;
　　}else{
　　　　windowHeight = document.body.clientHeight;
　　}
　　return windowHeight;
}

export default {
  getUrlParam (name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    var result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  },
  isMobile () {
    return /Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent) ? 'mobile' : 'pc';
  },
  getWindowHeight(){
  　　var windowHeight = 0;
  　　if(document.compatMode == "CSS1Compat"){
  　　　　windowHeight = document.documentElement.clientHeight;
  　　}else{
  　　　　windowHeight = document.body.clientHeight;
  　　}
      if (this.isMobile() === 'mobile') {
        return window.innerHeight;
      }
  　　return windowHeight;
  },
  getScrollHeight(){
  　　var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  　　if(document.body){
  　　　　bodyScrollHeight = document.body.scrollHeight;
  　　}
  　　if(document.documentElement){
  　　　　documentScrollHeight = document.documentElement.scrollHeight;
  　　}
  　　scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  　　return scrollHeight;
  },
  getScrollTop(){
  　　var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  　　if(document.body){
  　　　　bodyScrollTop = document.body.scrollTop;
  　　}
  　　if(document.documentElement){
  　　　　documentScrollTop = document.documentElement.scrollTop;
  　　}
  　　scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  　　return scrollTop;
  },
  validate (value, type = 'require') {
    value = value.trim();
    // 非空验证。
    if (type === 'require') {
        return !!value;
    }
    // 手机号验证
    if (type === 'phone') {
        return /1\d{10}$/.test(value);
    }
    // 邮箱验证
    if (type === 'email') {
        return /^(\w)+(\.\w+)*@(\w)+((\.\w{2,3}){1,3})$/.test(value);
    }

    // 身份证验证
    if (type === 'idcard') {
        return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value);
    }
  },
  createComparisonFunction(propertyName) {
    return function(object1, object2) {
      var value1 = object1[propertyName];
      var value2 = object2[propertyName];
      if (value1 < value2) {
        return -1;
      } else if (value1 === value2) {
        return 0;
      } else if (value1 > value2){
        return 1;
      }
    }
  }
}
