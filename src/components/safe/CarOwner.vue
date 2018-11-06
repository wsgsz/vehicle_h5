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
    <group label-width="6em" label-margin-right="2em" label-align="left" label-font-size="16px" gutter=".4em">
      <div class="CarOwn_title">车主信息</div>
      <x-input title="车主姓名" placeholder="请输入车主姓名" v-model="carOwnInfor.name"></x-input>
      <x-input title="家庭地址" placeholder="请输入家庭地址" v-model="carOwnInfor.address"></x-input>
      <x-input title="手机号码" placeholder="请输入手机号码" v-model="carOwnInfor.phone"></x-input>
         <div class="CarOwn_title">车主信息 &nbsp;&nbsp;<span class="CarOwn_title_span">(如有代理人，请填写代理人信息))</span></div>
      <x-input title="代理人姓名" placeholder="请输入代理人姓名" v-model="carOwnInfor.proxyName"></x-input>
      <x-input title="代理人手机号" placeholder="请输入代理人手机号" v-model="carOwnInfor.proxyPhone"></x-input>
    </group>
    <x-button type="default" link="/safe/Car" class="custom-btn" >下一步</x-button>
  </div>
</template>

<script>
  import {Group,XInput,Cell,XButton  } from 'vux'
  export default {
    components: {
      Group,
      XInput,
      Cell,
      XButton
    },
    data () {
      return {
        stepOne: true,
        stepTwo: false,
        stepThree: false,
        carOwnInfor:{
        name:'',
        address:'',
        phone:'',
        proxyName:'',
        proxyPhone:''
        }
       
      }
    },
    mounted(){
      this.$emit("showParentComp",0)
    }
  }
</script>
<style lang="less" scoped>
.custom-btn{
  width:90% !important;
  margin:15px auto;
  background-color: #16A4E0 !important;
  color:#fff !important;
   &:active {
    border-color: rgba(206, 60, 57, 0.6)!important;
    background-color: transparent;
  }
}
.weui-cell{
  font-size: 14px;
}
.weui-cells{
  font-size:14px;
  margin-top:.5em;
}
.CarOwn_title{
  font-size: 14px;
  font-weight: 600;
  padding:10px 15px;
  color: #333;
  .CarOwn_title_span{
    color:#9D9D9D;
    font-weight: 500;
    color:12px;
  }
}

</style>