<template>
    <div class="uploadFile">
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
        <div class="uploadIdcard">
            <p class="title">请上传身份证正反面</p>
            <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none" />
            <div class="idcardJust">
                <div class="upload_warp_left" @click="fileClick('1')">
                    <div class="addImg">
                        <i class="icon iconfont icon-shangchuantupian"></i>
                    </div>
                    <p class="tips">点击上传身份证正面</p>
                </div>
                <div class="justImg" v-if="just.length > 0">
                    <img :src="just[0].file.src">
                    <p>正面</p>
                </div>
                <div class="justImg" v-else>
                    <img src="../../assets/back.png">
                    <p>示例</p>
                </div>
            </div>
            <div class="idcardJust">
                <div class="upload_warp_left" @click="fileClick('2')">
                    <div class="addImg">
                        <i class="icon iconfont icon-shangchuantupian"></i>
                    </div>
                    <p class="tips">点击上传身份证反面</p>
                </div>
                <div class="justImg" v-if="back.length > 0">
                    <img :src="back[0].file.src">
                    <p>反面</p>
                </div>
                <div class="justImg" v-else>
                    <img src="../../assets/just.png">
                    <p>示例</p>
                </div>
            </div>
        </div>
        <div class="next" @click="next()">下一步</div>
    </div>
</template>
<script type="text/ecmascript-6">
import NavHeader from 'components/nav-header/nav-header'
import { XInput, PopupPicker } from 'vux'
import Footer from 'components/footer/footer'
export default {
  data() {
    return {
      title: '机动车牌证申请表',
      stepOne: true,
      stepTwo: true,
      stepThree: false,
      just: [],
      back: [],
      num: ''
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
      if (this.$route.query.type === 'HBJC') {
        this.$router.push({ path: '/certificate/uploadDriver', query: { type: 'HBJC' } })
      } else {
        this.$router.push({ path: '/certificate/uploadDriver' })
      }
    },
    fileClick(num) {
      this.num = num
      document.getElementById('upload_file').click()
    },
    fileChange(el) {
      let that = this
      if (!el.target.files[0].size) return
      this.fileList(el.target)
      el.target.value = ''
    },
    fileList(fileList) {
      let files = fileList.files
      for (let i = 0; i < files.length; i++) {
        // 判断是否为文件夹
        if (files[i].type !== '') {
          this.fileAdd(files[i])
        } else {
          // 文件夹处理
          this.folders(fileList.items[i])
        }
      }
    },
    // 文件夹处理
    folders(files) {
      let _this = this
      // 判断是否为原生file
      if (files.kind) {
        files = files.webkitGetAsEntry()
      }
      files.createReader().readEntries(function(file) {
        for (let i = 0; i < file.length; i++) {
          if (file[i].isFile) {
            _this.foldersAdd(file[i])
          } else {
            _this.folders(file[i])
          }
        }
      })
    },
    foldersAdd(entry) {
      let _this = this
      entry.file(function(file) {
        _this.fileAdd(file)
      })
    },
    fileAdd(file) {
      let that = this
      // 总大小
      this.size = this.size + file.size
      // 判断是否为图片文件
      if (file.type.indexOf('image') === -1) {
        file.src = 'wenjian.png'
        if (that.num === '1') {
          that.just.push({
            file
          })
        } else {
          that.back.push({
            file
          })
        }
      } else {
        let reader = new FileReader()
        reader.vue = this
        reader.readAsDataURL(file)
        reader.onload = function() {
          file.src = this.result
          if (that.num === '1') {
            that.just = []
            this.vue.just.push({
              file
            })
          } else {
            that.back = []
            this.vue.back.push({
              file
            })
          }
        }
      }
    }
  },
  components: {
    NavHeader
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
@import '../../common/css/variable.less';
.uploadFile {
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
  .uploadIdcard {
    .title {
      background: #fff;
      height: 13vw;
      line-height: 13vw;
      padding-left: 4vw;
      color: #777;
    }
  }
  .idcardJust {
    display: flex;
    background: #fff;
    border-top: 1px solid #bec2c9;
    .upload_warp_left {
      background: #fff;
      height: 50vw;
      .addImg {
        width: 30vw;
        height: 30vw;
        text-align: center;
        line-height: 30vw;
        border: 1px solid #ccc;
        margin: 6vw 10vw;
        .icon-shangchuantupian {
          font-size: 11vw;
          color: #65b9ee;
        }
      }
      .tips {
        width: 40vw;
        font-size: 3.5vw;
        color: @tips-hui;
        padding-left: 9vw;
      }
    }
    .justImg {
      height: 30vw;
      margin-top: 7vw;
      img {
        width: 45vw;
        height: 30vw;
      }
      p {
        width: 45vw;
        font-size: 3.5vw;
        color: #bbbbbb;
        text-align: center;
        margin-top: 5vw;
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
