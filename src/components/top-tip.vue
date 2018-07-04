<template>
  <transition name="drop">
    <div class="top-tip" v-show="showFlag" @click.stop="hide">
      <slot></slot>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      delay: {
        type: Number,
        default: 2000
      }
    },
    data () {
      return {
        showFlag: false
      }
    },
    methods: {
      show () {
        this.showFlag = true
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.hide()
        }, this.delay)
      },
      hide () {
        this.showFlag = false
      }
    }
  }
</script>

<style scoped lang="less">
  .top-tip {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 200px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    z-index: 500;
    background: #d8c578;
    border-radius: 4px;
    color: #fff;
    &.drop-enter-active, &.drop-leave-active {
      // transition: all 0.3s;
    }
    &.drop-enter, &.drop-leave-to {
      // transform: translate3d(0, -100%, 0);
    }
  }
</style>
