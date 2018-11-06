<template>
  <div class="footerNav">
    <router-link to="/index" exact class="tab-item">
      <span class="icon iconfont icon-shouye"></span>
      <span class="text">首页</span>
    </router-link>
    <router-link to="/order" class="tab-item">
      <span class="icon iconfont icon-icon"></span>
      <span class="text">订单</span>
    </router-link>
    <div class="tab-item">
      <router-link to="/scan" class="tab-item">
      <span class="add">扫码</span>
      </router-link>
    </div>
    <router-link to="/appoint" class="tab-item">
      <span class="icon iconfont icon-gouwuche1"></span>
      <span class="text">预约</span>
    </router-link>
    <router-link to="/home" class="tab-item">
      <span class="icon iconfont icon-personal"></span>
      <span class="text">我的</span>
    </router-link>
    <div class="clearBoth"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
      }
    },
    methods: {
    },
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .footerNav {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: #fff;
    display: flex;
    text-align: center;
    box-shadow: 0px 0px 3px #888888;
    height: 11.7vw;
    z-index:10;
    .tab-item {
      display: flex;
      flex-direction: column;
      /*padding: 1vw 0;*/
      flex: 1;
      color: #aaa;
      font-size: 3.6vw;
      .add {
        height: 10vw;
        width: 10vw;
        display: block;
        text-align: center;
        border-radius: 50%;
        background-color: #5CB3F2;
        margin: 0 auto;
        line-height: 10vw;
        font-size: 7vw;
        position: relative;
        bottom: 12px;
        color: #fff;

      }
      .icon {
        font-size: 6.2vw;
        height: 6vw;
        font-size: 5.2vw;
        height: 5.3vw;
      }
      .text {
        display: block;
        height: 6vw;
      }
      &.router-link-active {
        color: #5CB3F2;
      }
    }
  }
/*  .mask {
    position: absolute;
    .maskBlack {
      background: #000;
      opacity: 0.5;
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
    }
    .writePost {
      position: fixed;
      bottom: 10vh;
      background: #fff;
      width: 24vw;
      height: 20vw;
      left: 15vw;
      border-radius: 50%;
      padding: 4vw 2vw;
      .icon-shangpinfabu {
        font-size: 10vw;
        margin-top: 1vw;
        display: block;
        color: #e01cec;
      }
      .icon-ziyuan {
        font-size: 8vw;
        margin-top: 1vw;
        display: block;
        color: #e01cec;
      }
      .tiezi {
        color: #333;
        text-align: center;
        margin-top: 2vw;
      }
    }
    .writeDiary {
      position: fixed;
      bottom: 10vh;
      background: #fff;
      width: 24vw;
      height: 20vw;
      left: 60vw;
      border-radius: 50%;
      padding: 4vw 2vw;
      .icon-xinyuandan {
        font-size: 10vw;
        margin-top: 1vw;
        display: block;
        color: #1296db;
      }
      .diary {
        color: #333;
        text-align: center;
        margin-top: 2vw;
      }
    }
  }*/
</style>
