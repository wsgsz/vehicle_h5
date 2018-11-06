<template>
    <div class="room">
        <div class="list" v-for="i in 5">
            <div class="_item">
                <div class="left title">
                    安全检验订单
                </div>
                <div class="right go">
                    已申请
                </div>
            </div>
            <div class="_item">
                <div class="left time">2018-08-10</div>
                <div class="right nogo">未支付</div>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {}
</script>

<style scoped lang="less" rel="stylesheet/less">
    .room{
        padding-top: 2vw;
        .list{
            padding: 2vw;
            background-color: #fff;
            border-bottom: 1px solid #eee;
            ._item{
                display: flex;
                padding: 2vw;
                .left{
                    width: 80%;
                    &.title{
                        font-size: 18px;
                    }
                    &.time{
                        color: #aaa;
                    }
                }
                .right{
                    width: 20%;
                    text-align: right;
                    &.go{
                        color: #5CB3F2;
                    }
                    &.nogo{
                        color: orange;
                    }
                }
            }
        }
    }
</style>
