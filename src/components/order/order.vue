<template>
    <div class="orderRoom">
        <x-header :left-options="{showBack: false}" style="background-color: #5CB3F2">订单</x-header>
        <div style="padding: 2vw 0;background-color: #fff">
            <tab bar-active-color="#5CB3F2" :line-width="2" custom-bar-width="60px">
                <tab-item active-class="active" selected>
                    <router-link to="/order">
                        牌证申请
                    </router-link>
                </tab-item>
                <tab-item active-class="active" style="border: 1px solid #ddd;border-top: none;border-bottom: none">
                    <router-link to="/order/o-safe">
                        安全检验
                    </router-link>
                </tab-item>
                <tab-item active-class="active">
                    <router-link to="/order/o-environ">
                        环保检测
                    </router-link>
                </tab-item>
            </tab>
        </div>

        <router-view/>
        <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import Footer from 'components/footer/footer'
    import { XHeader, Tab, TabItem } from 'vux'
    export default {
        components:{
            'v-footer': Footer,
            XHeader,
            Tab,
            TabItem
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
    .orderRoom{
        height: 100%;
        background-color: #eee;
    }
    .vux-tab-item{
        background: none !important;
        &.active{
            a {
                color: #5CB3F2;
            }
        }
        a{
            display: block;
            font-size: 18px;
        }
    }
</style>
