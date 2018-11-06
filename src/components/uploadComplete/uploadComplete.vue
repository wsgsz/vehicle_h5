<template>
    <div class="uploadComplete">
        <nav-header :title="title"></nav-header>
        <div class="nav">
            <p class="navTitle">申请流程</p>
            <div class="navStep">
                <div class="stepOne" v-bind:class="{ active: stepOne }">
                    <span class="number">1</span>
                    <span>基本资料</span>
                    <span class="icon iconfont icon-iconset0438"></span>
                </div>
                <div class="stepTwo" v-bind:class="{ active: stepTwo }">
                    <span class="number">2</span>
                    <span>上传证件</span>
                    <span class="icon iconfont icon-iconset0438"></span>
                </div>
                <div class="stepThree" v-bind:class="{ active: stepThree }">
                    <span class="number">3</span>
                    <span>完成</span>
                </div>
            </div>
        </div>
        <div class="complete">
            <i class="icon iconfont icon-wancheng"></i>
            <p>资料上传成功</p>
        </div>
        <div class="tips">
            <p class="tipsTitle">温馨提示</p>
            <p class="tipsContent">
                您的医生认证资料提交时间为2017年11月29日 我们将在2工作日内审核资料，并及时给您反馈 如有疑问，请电话咨询小助手
                <span>400-899-1234</span>
            </p>
        </div>
        <div class="next" @click="next()">完成</div>
    </div>
</template>
<script type="text/ecmascript-6">
import NavHeader from 'components/nav-header/nav-header'
export default {
  data() {
    return {
      title: '',
      stepOne: true,
      stepTwo: true,
      stepThree: true
    }
  },
  mounted() {
    if (this.$route.query.type === 'HBJC') {
      this.title = '机动车环保检测'
    } else {
      this.title = '机动车牌证申请表'
    }
  },
  methods: {
      next() {
      this.$router.push({ path: '/'})
      }
  },
  components: {
    NavHeader
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import '../../common/css/variable.less';
.uploadComplete {
  margin-top: 12.5vw;
  .nav {
    background: #fff;
    .navTitle {
      padding: 1vw 0vw 2vw 10vw;
    }
    .navStep {
      display: flex;
      padding: 2vw 0vw 2vw 10vw;
      border-bottom: 1.5vw solid #f7f7f7;
      .active {
        color: #4ab3ff;
        .number {
          background: #4ab3ff;
        }
      }
      div {
        display: flex;
        line-height: 6vw;
        margin-right: 3vw;
        color: #9d9d9d;
        font-size: 4vw;
        .number {
          display: block;
          width: 5vw;
          height: 5vw;
          text-align: center;
          line-height: 6vw;
          border-radius: 50%;
          background: #9d9d9d;
          color: #fff;
          margin-right: 2vw;
          font-size: 3.5vw;
          margin-top: 0.3vw;
        }
        .icon {
          display: block;
          margin-left: 2vw;
          font-size: 6vw;
          margin-top: 0.3vw;
        }
      }
    }
  }
  .complete {
    text-align: center;
    height: 45vw;
    .icon {
      font-size: 25vw;
      color: #259b24;
      margin-top: 10vw;
      display: block;
    }
    p {
      line-height: 15vw;
      color: #259b24;
    }
  }
  .tips {
    border-top: 1px dotted #ccc;
    .tipsTitle {
      padding: 5vw;
      font-weight: bold;
    }
    .tipsContent {
      padding: 0 5vw;
      line-height: 7vw;
      color: #5e5e5e;
      span {
        color: #faa63e;
        font-weight: bold;
      }
    }
  }
  .next {
    width: 80vw;
    height: 10vw;
    line-height: 10vw;
    text-align: center;
    background: #65b9ee;
    color: #fff;
    border-radius: 5px;
    margin-top: 12vw;
    margin-left: 10vw;
  }
}
</style>
