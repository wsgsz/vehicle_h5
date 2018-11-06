<template>
  <div class="header-wrap">
    <div class="left">
      <i class="icon iconfont icon-zuojiantou" @click="goBack"></i>
      <span></span>
    </div>
    <div class="title">{{title}}</div>
    <div class="right">{{right}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: ['title', 'right'],
  methods: {
    goBack() {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import '../../common/css/variable.less';

.header-wrap {
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  align-items: center;
  background: #65B9EE;
  color: #fff;
  height: 12vw;
  line-height: 12vw;
  font-size: 4.2vw;
  z-index: 99;
  .left {
    flex: 0.2;
    font-size: 3.6vw;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    .icon {
      font-size: 4.5vw;
      font-weight: bolder;
      margin-left: 3vw;
      padding-right: 2vw;
      color: #fff;
    }
  }
  .title {
    flex: 3;
    text-align: center;
    padding-left: 1vw;
    font-size: 5vw;
    color: #fff;
  }
  .right {
    flex: 0.5;
    text-align: center;
  }
}
</style>
