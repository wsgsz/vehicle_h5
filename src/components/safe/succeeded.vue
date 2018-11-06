<template>
  <div>
    <div class="nav">
      <p class="navTitle">检测流程</p>
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
    <x-button type="default" link="/index" class="custom-btn">完成</x-button>
  </div>
</template>
<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  },
  data() {
    return {
      stepOne: true,
      stepTwo: true,
      stepThree: true,
    }
  },
  mounted() {
    this.$emit("showParentComp", 3)
  }
}

</script>
<style lang="less">
.succeed {
  margin: auto;
  padding: 30px 0;
  border-bottom: 1px dotted #5E5E5E;
  .succeed_center {
    img {
      width: 80px;
    }
    p {
      display: block;
      line-height: 20px;
      color: rgba(37, 155, 36, 1);
      font-size: 14px;
      text-align: center;
      font-family: Arial;
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
</style>
