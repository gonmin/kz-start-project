import util from '@/lib/util'
import {api} from '@/lib/api'
export default {
  data () {
    return {
      landPageId: '',
      kz_user_id: '',
      scrollToBottom: false,
      visitTime: 0,
      updateTimeTimer: null
    }
  },
  mounted () {
    this.landpageInit()
  },
  methods: {
    landpageInit () {
      this.getUrlParams()
      if (util.isMobile() === 'mobile') {
        this.addImgFalse()
      }
      this.watchScroll();
      this.callVisit();
    },
    getUrlParams () {
      this.landPageId = util.getUrlParam('land_page_id') || '1';
      this.kz_user_id = util.getUrlParam('kz_user_id') || 'oul6yhyythc4ggw' || 'oul75uuqh008so8';
    },
    addImgFalse: function addImgFalse() {
      var imgs = document.querySelectorAll('img');
      const arrayImgs = Array.prototype.slice.call(imgs, 0)
      arrayImgs.forEach(item => {
        item.setAttribute('onclick', 'return false;')
      })
    },
    watchScroll: function () {
      console.log('watchScroll')
      var that = this;
      if (this.scrollToBottom) {
        return;
      }
      window.addEventListener('scroll', e => {
        // console.log(e.currentTarget.scrollY)
        that.$nextTick(() => {
          if ((util.getScrollTop() + util.getWindowHeight() + 20) > util.getScrollHeight()) {
            if (that.scrollToBottom) {
              return
            }
            that.scrollToBottom = true
            console.log('滚动到底了')
            that.scrollBottomApi()
          }
        })
      })
    },
    scrollBottomApi () {
      var that = this;
      var params = {
        mod: 'us_ice_cream',
        act: 'fullscreen',
        kz_user_id: this.kz_user_id
      }
      api.commonApi(params, function (response) {
        that.scrollToBottom = true;
      }, function () {
        that.scrollToBottom = false;
      })
    },
    callVisit: function () {
      var that = this;
      var params = {
        mod: 'us_ice_cream',
        act: 'visit',
        kz_user_id: this.kz_user_id,
        land_page_id: this.landPageId
      }
      api.commonApi(params, function(data) {
        that.visitTime = data.pcp_browse_time
        that.updateTime();
      })
    },
    updateTime: function () {
      var that = this;
      this.updateTimeTimer = setInterval(function() {
        if (that.visitTime >= 85) {
          clearInterval(that.updateTimeTimer)
          return;
        }
        that.visitTime += 1;
        console.log(that.visitTime)
        that.updateTimeApi();
      }, 1000)
    },
    updateTimeApi: function () {
      var params = {
        mod: 'us_ice_cream',
        act: 'browseTimeUpdate',
        kz_user_id: this.kz_user_id
      }
      api.commonApi(params, function() {
      })
    }
  }
}