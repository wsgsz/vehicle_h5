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
      <div class="CarOwn_title">车辆信息</div>
      <x-input title="车管所名称" placeholder="请输入车管所名称" v-model="vehicle.name"></x-input>
      <x-input title="号牌号码" placeholder="请输入号牌号码" v-model="vehicle.NumberPlate"></x-input>
      <x-input title="车辆类型" placeholder="请输入车辆类型" v-model="vehicle.CarType"></x-input>
      <x-input title="使用性质" placeholder="请输入使用性质" v-model="vehicle.property"></x-input>
      <x-input title="百里表读秒" placeholder="请输入百里表读秒" v-model="vehicle.Mileage"></x-input>
      <!--  <popup-picker title="车管所名称" :data="list1" v-model="vehicle.name" placeholder="车管所名称" value-text-align="left"></popup-picker>
      <popup-picker title="号牌号码" :data="list2" v-model="vehicle.NumberPlate" placeholder="号牌号码" value-text-align="left"></popup-picker>
      <popup-picker title="车辆类型" :data="list2" v-model="vehicle.CarType" placeholder="请选择车辆类型" value-text-align="left"></popup-picker>
      <popup-picker title="使用性质" :data="list2" v-model="vehicle.property" placeholder="请选择使用性质" value-text-align="left"></popup-picker>
      <popup-picker title="百里表读秒" :data="list2" v-model="vehicle.Mileage" placeholder="请选择里程数" value-text-align="left"></popup-picker> -->
      <datetime title="车辆出厂日期" :data="list2" v-model="vehicle.LeaveFactory" placeholder="请选择日期" value-text-align="left"></datetime>
      <datetime title="初次登记日期" :data="list2" v-model="vehicle.InitialRegistration" placeholder="请选择日期" value-text-align="left"></datetime>
      <datetime title="检校日期" v-model="vehicle.calibration" placeholder="请选择日期" value-text-align="left"></datetime>
      <!-- <datetime title="datetime" v-model="date"></datetime> -->
    </group>
    <x-button type="default" link="/safe/uploaderCard" class="custom-btn">下一步</x-button>
  </div>
</template>
<script>
import { Group, XInput, Cell, PopupPicker, Datetime, XButton } from 'vux'
export default {
  components: {

    Group,
    XInput,
    Cell,
    PopupPicker,
    Datetime,
    XButton
  },
  data() {
    return {
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      vehicle: {
        name: [], //车管所名称
        NumberPlate: [], //号牌号码
        CarType: [], //车辆类型
        property: [], //使用性质
        Mileage: [], //里程数
        LeaveFactory: '', //出厂日期
        InitialRegistration: '', //初次登记
        calibration: '' //检校日期
      },
      list1: [
        ['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']
      ],
      list2: [
        ['小米', 'iPhone', '华为', '情怀', '三星', '其他', '不告诉你']
      ],
    }
  },
  mounted() {
    this.$emit("showParentComp", 0)
  }
}

</script>
<style lang="less" scoped>
.weui-cell {
  font-size: 14px;
}

.weui-cells {
  font-size: 14px;
  margin-top: .5em;
}

.CarOwn_title {
  font-size: 14px;
  font-weight: 600;
  padding: 10px 15px;
  color: #333;

  .CarOwn_title_span {
    color: #9D9D9D;
    font-weight: 500;
    color: 12px;
  }
}

.custom-btn {
  width: 90% !important;
  margin: 45px auto;
  background-color: #16A4E0 !important;
  color: #fff !important;

  & :active {
    border-color: rgba(206, 60, 57, 0.6) !important;
    background-color: transparent;
  }
}

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

</style>
