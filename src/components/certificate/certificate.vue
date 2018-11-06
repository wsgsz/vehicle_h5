<template>
    <div class="certificate">
        <nav-header title="机动车牌证申请表"></nav-header>
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
        <div class="personMessage">
            <p class="messageTitle">1、机动车所有人</p>
            <ul>
                <li>
                    <x-input title="姓名名称:" name="username" placeholder="请输入机动车所有人姓名" is-type="china-name"></x-input>
                </li>
                <li>
                    <x-input title="邮寄地址:" name="username" placeholder="请输入邮寄地址"></x-input>
                </li>
                <li>
                    <x-input title="手机号码:" name="username" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
                </li>
                <li>
                    <x-input type="number" title="邮政编码:" name="username" placeholder="请输入邮政编码"></x-input>
                </li>
                <li>
                    <x-input title="固定电话:" name="username" placeholder="请输入固定电话号码" keyboard="number" is-type="china-mobile"></x-input>
                </li>
            </ul>
        </div>
        <div class="messageType">
            <p class="messageTitle">2、申请业务事项</p>
            <div class="messageNumber">
                <p class="numberType">号码种类</p>
                <p class="addressSelect">
                    <popup-picker placeholder="请选择" :data="numList" value-text-align="center" v-model="time"></popup-picker>
                </p>
            </div>
            <div class="messageNumber">
                <p class="numberType">号牌号码</p>
                <p class="addressSelect">
                    <popup-picker placeholder="请选择" :data="number" value-text-align="center" v-model="haopai"></popup-picker>
                </p>
            </div>
        </div>
        <div class="next" @click="next()">下一步</div>
    </div>
</template>

<script type="text/ecmascript-6">
import NavHeader from 'components/nav-header/nav-header'
import { XInput, PopupPicker } from 'vux'
export default {
  data() {
    return {
      stepOne: true,
      stepTwo: false,
      stepThree: false,
      numList: [['小型汽车', '中型汽车', '大型汽车', '大货车']],
      time: ['小型汽车'],
      number: [['豫A AT123S', '豫A AT123S', '豫A AT123S', '豫A AT123S']],
      haopai: ['豫A AT123S']
    }
  },
  methods: {
      next() {
          this.$router.push({path: '/certificate/uploadFile'})
      }
  },
  components: {
    NavHeader,
    XInput,
    PopupPicker
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
body {
  background: #f7f7f7;
}
.certificate {
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
  .personMessage {
    background: #fff;
    .messageTitle {
      height: 13vw;
      line-height: 13vw;
      padding-left: 6vw;
      font-weight: bold;
      border-bottom: 1px solid #f7f7f7;
    }
    ul {
      li {
        padding-left: 1vw;
        height: 12vw;
        line-height: 7vw;
        border-bottom: 1px solid #f7f7f7;
        input {
          height: 8vw;
          line-height: 8vw;
        }
        ::-webkit-input-placeholder {
          color: #aaa;
        }
      }
    }
  }
  .messageType {
    background: #fff;
    .messageTitle {
      height: 13vw;
      line-height: 13vw;
      padding-left: 6vw;
      font-weight: bold;
      border-bottom: 1px solid #f7f7f7;
    }
  }
  .messageNumber {
    display: flex;
    height: 13vw;
    .numberType {
      height: 13vw;
      line-height: 13vw;
      padding-left: 6vw;
      color: #c1c1c1;
    }
    .addressSelect {
      width: 70vw;
      line-height: 7vw;
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
