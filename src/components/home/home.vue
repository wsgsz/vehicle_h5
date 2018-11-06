<template>
    <div class="homeRoom">
        <div class="info">
            <div class="clearfix">
                <!--<a class="msg fr" @click="go('message')"></a>-->
                <a class="set fr"></a>
            </div>
            <div class="info_msg clearfix">
                <div class="head_img">
                    <img v-show="!userInfo.imgSrc" :src="headImg" class="img-responsive" alt="">
                    <img v-show="userInfo.imgSrc" :src="userInfo.imgSrc" class="img-responsive" alt="">
                </div>
                <div class="account">
                    {{userInfo.vcLoginName}}
                </div>
            </div>
        </div>
        <group gutter="0">
            <cell title="用户信息" is-link >
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/info.png">
            </cell>
            <!--<cell title="我的账户" is-link link="/myaccount">
              <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/account.png">
            </cell>
            <cell title="已订业务" is-link link="/booked">
              <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/ye.png">
            </cell>
            <cell title="我的订单" is-link link="/myorder">
              <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/order.png">
            </cell>-->
            <cell title="修改绑定手机" is-link >
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/gai.png">
            </cell>
            <cell title="业务绑定" is-link>
                <img slot="icon" width="25" style="display:block;margin-right:5px;" src="./images/ye.png">
            </cell>
        </group>
        <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import Footer from 'components/footer/footer'
    import {Cell, Group} from 'vux'
    import HeadImg from './images/head_img.png'
    import * as ApiService from 'api/api'
    export default {
        components: {
            'v-footer': Footer,
            Cell,
            Group
        },
        data() {
            return {
                headImg: HeadImg,
                userInfo: {
                    vcLoginName: '13012345678'
                }
            }
        },
        created(){

        },
        methods: {

        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .homeRoom {
        .info {
            background: url("./images/title_blue.png");
            padding: 2vw 2vw 4vw 4vw;
            .msg {
                background: url(./images/msg.png) no-repeat;
                width: 5vw;
                height: 5vw;
                background-size: contain;
            }
            .set {
                background: url(./images/set.png) no-repeat;
                width: 5vw;
                height: 5vw;
                background-size: contain;
                margin-right: 2vw;
            }
            .info_msg {
                color: #fff;
                display: flex;
                display: -webkit-flex;
                align-items: center;
                .head_img {
                    border: none;
                    border-radius: 50% 50%;
                    width: 13vw;
                    height: 13vw;
                    overflow: hidden;
                    .img-responsive{
                        display: block;
                        width: 100%;
                    }
                }
                .account {
                    margin-left: 3vw;
                    font-size: 4vw;
                }
            }
        }
    }
</style>
