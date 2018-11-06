<template>
    <div>
        <x-header :left-options="{showBack: false}" style="background-color: #5CB3F2">预约</x-header>
        <v-footer></v-footer>
    </div>
</template>

<script type="text/ecmascript-6">
    import Footer from 'components/footer/footer'
    import { XHeader } from 'vux'
    export default {
        components:{
            'v-footer': Footer,
            XHeader
        }
    }
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
