<template>
  <div class="modal" :class="{ 'show-modal': showModal}">
    <div class="modal-box">
      <div class="modal-wrap">
        <i class="close-btn" @click="showModal=false"></i>
        <div class="title">
          <img onclick="return false" src="http://img.qdtech.ai/upload/decision/f3/c4/f3c4f2203779e58612b3b6c4bdfa2eea.jpg" alt="">
        </div>
        <div class="content">
          <h3>Sorry</h3>
          <p>Oops. We don’t have product available at this time. Please check in again in later in the summer.</p>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      showModal: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
/*弹窗*/
.modal {
	display: none;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
  height: 100%;
  padding: 0 26px;
  box-sizing: border-box;
	z-index: 9;
  background-color: rgba(76, 76, 76, 0.9);
  &.show-modal {
    display: block;
  }
  .modal-box {
    position: relative;
    width: 100%;
    height: 100%;
    .modal-wrap {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      max-width: 375px;
      height: 300px;
      background-color: #fff;
      border-radius: 4px;
      .title {
        height: 47px;
        border-bottom: 2px solid #999;
        img {
          margin: 0 auto;
          height: 100%;
        }
      }
      .close-btn {
        position: absolute;
        margin: auto;
        top: -12px;
        right: -12px;
        width: 30px;
        height: 30px;
        background: url(http://img.qdtech.ai/upload/decision/41/7b/417be4f4797e09bc64e23f2a564d2824.png) no-repeat;
        background-size: 30px 30px;
      }
      .content {
        padding: 0 26px;
        color: #08266e;
        line-height: 30px;
        text-align: center;
        h3 {
          padding-top: 24px;
          padding-bottom: 20px;
          font-size: 30px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }
}

</style>
