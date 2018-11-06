<template>
    <div>
        <swiper :list="demo_list" auto height="180px" dots-position="center"></swiper>
        <div>
            <div>
                <router-link to="/certificate"  class="list">
                    <span class="text">牌证申请</span>
                </router-link>
            </div>
            <div>
                <router-link to="/safe"  class="list or">
                    <span class="text">安全检验</span>
                </router-link>
            </div>
            <div>
                <router-link to="/environ"  class="list gr">
                    <span class="text">环保检测</span>
                </router-link>
            </div>
        </div>
        <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import { Swiper } from 'vux'
    import Footer from 'components/footer/footer'
    export default {
        components:{
            'v-footer': Footer,
            Swiper
        },
        data(){
            return {
                demo_list: [{
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vvsr72j20p00gogo2.jpg'
                }, {
                    url: 'javascript:',
                    img: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw1k2wj20p00goq7n.jpg'
                }, {
                    url: 'javascript:',
                    fallbackImg: 'https://ww1.sinaimg.cn/large/663d3650gy1fq66vw50iwj20ff0aaaci.jpg'
                }]
            }
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .list{
        display: block;
        width: 80%;
        margin: 8vw auto;
        text-align: center;
        border-radius: 3px;
        background-color: #5CB3F2;
        color: #fff;
        padding: 6vw 0;
        box-shadow: 2px 3px 5px #ccc;
        &.or{
            background-color: #ECA63F;
        }
        &.gr{
            background-color: #62B761;
        }
    }
</style>
