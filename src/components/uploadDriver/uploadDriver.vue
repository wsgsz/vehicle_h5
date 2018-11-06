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
            <p class="title">请上传车辆驾驶照片</p>
            <input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none" />
            <div class="idcardJust">
                <div class="upload_warp_left" @click="fileClick()">
                    <div class="addImg">
                        <i class="icon iconfont icon-shangchuantupian"></i>
                    </div>
                    <p class="tips">点击上传车辆驾驶照片(请上传驾驶证主页、副页、及备注页)</p>
                </div>
            </div>
        </div>
        <div class="uploadDemo" v-if="imgList.length == 0">
            <p class="demoTitle">上传示例</p>
            <ul class="demoImg">
                <li>
                    <img src="../../assets/qian.png" alt="">
                    <p>驾驶证主页</p>
                </li>
                <li>
                    <img src="../../assets/fuye.jpg" alt="">
                    <p>驾驶证反面</p>
                </li>
                <li>
                    <img src="../../assets/tips.png" alt="">
                    <p>驾驶证副页</p>
                </li>
            </ul>
            <p class="tips">注: 上传照片请确保信息内容清晰可见</p>
        </div>
        <p class="demoTitle" v-if="imgList.length!=0">上传照片</p>
        <div class="upload_warp_img" v-if="imgList.length!=0">
            <div class="upload_warp_img_div" v-for="(item, index) of imgList" :key="index">
                <div class="upload_warp_img_div_top">
                    <img src="./img/del.png" class="upload_warp_img_div_del" @click="fileDel(index, item.one)">
                </div>
                <img :src="item.file.src">
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
      imgList: []
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
        this.$router.push({ path: '/certificate/uploadComplete', query: { type: 'HBJC' } })
      } else {
        this.$router.push({ path: '/certificate/uploadComplete' })
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
        this.imgList.push({
          file
        })
      } else {
        let reader = new FileReader()
        reader.vue = this
        reader.readAsDataURL(file)
        reader.onload = function() {
          file.src = this.result
          this.vue.imgList.push({
            file
          })
        }
      }
    },
    fileDel(index) {
      let that = this
      this.size = this.size - this.imgList[index].file.size // 总大小
      this.imgList.splice(index, 1)
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
      width: 100vw;
      .addImg {
        width: 30vw;
        height: 30vw;
        text-align: center;
        line-height: 30vw;
        border: 1px solid #ccc;
        margin: 6vw 35vw;
        .icon-shangchuantupian {
          font-size: 11vw;
          color: #65b9ee;
        }
      }
      .tips {
        width: 60vw;
        font-size: 3.5vw;
        color: #bbbbbb;
        margin-left: 20vw;
        line-height: 5vw;
        text-align: center;
        margin-bottom: 3vw;
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
  .uploadDemo {
    margin-top: 1vw;
    .demoTitle {
      background: #fff;
      padding: 4vw;
    }
    .demoImg {
      display: flex;
      background: #fff;
      li {
        width: 30vw;
        padding-left: 2.5vw;
        img {
          width: 30vw;
          height: 20vw;
        }
        p {
          text-align: center;
          margin: 4vw 0vw;
        }
      }
    }
    .tips {
      background: #fff;
      height: 15vw;
      line-height: 9vw;
      text-align: center;
      color: #bbbbbb;
    }
  }
  .demoTitle {
    background: #fff;
    padding: 4vw;
  }
  .upload_warp_img_div_del {
    position: absolute;
    top: 1vw;
    width: 3.5vw;
    right: 0.5vw;
  }
  .upload_warp_img_div_top {
    position: absolute;
    top: 0;
    width: 100%;
    height: 6vw;
    background-color: rgba(0, 0, 0, 0.4);
    line-height: 6vw;
    text-align: left;
    color: #fff;
    font-size: 3.2vw;
    text-indent: 0.5vw;
    .upload_warp_img_div_text {
      overflow: hidden;
    }
  }
  .upload_warp_img_div img {
    max-width: 100%;
    max-height: 100%;
    vertical-align: middle;
  }
  .upload_warp_img {
    display: flex;
    flex-wrap: wrap;
    background: #fff;
    .upload_warp_img_div {
      position: relative;
      height: 25vw;
      width: 28vw;
      margin: 3vw 3vw 5vw 2vw;
      line-height: 22vw;
      display: table-cell;
      text-align: center;
      background-color: #fff;
    }
  }
  .upload_warp_right {
    float: left;
    width: 57%;
    margin-left: 2%;
    height: 100%;
    border: 1px dashed #999;
    border-radius: 4px;
    line-height: 130px;
    color: #999;
  }
  .next {
    width: 80vw;
    height: 10vw;
    line-height: 10vw;
    text-align: center;
    background: #65b9ee;
    color: #fff;
    border-radius: 5px;
    margin-top: 4vw;
    margin-left: 10vw;
  }
}
</style>
