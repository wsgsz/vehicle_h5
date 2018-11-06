import Vue from 'vue'
import Router from 'vue-router'
import Main from 'components/main/main'
import Order from 'components/order/order'
import OCertificate from 'components/order/children/certificate'
import OSafe from 'components/order/children/safe'
import OEnviron from 'components/order/children/environ'
import Certificate from 'components/certificate/certificate'
import UploadFile from 'components/uploadFile/uploadFile'
import UploadDriver from 'components/uploadDriver/uploadDriver'
import UploadComplete from 'components/uploadComplete/uploadComplete'
import Safe from 'components/safe/safe'
import Environ from 'components/environ/environ'
import Appoint from 'components/appoint/appoint'
import Home from 'components/home/home'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Main',
            component: Main
        },
        {
            path: '/index',
            name: 'Main',
            component: Main
        },
        {
            path: '/order',
            name: 'order',
            component: Order,
            children: [{
                    path: '/',
                    name: 'oCertificate',
                    component: OCertificate
                },
                {
                    path: 'o-safe',
                    name: 'OSafe',
                    component: OSafe
                },
                {
                    path: 'o-environ',
                    name: 'oEnviron',
                    component: OEnviron
                }
            ]
        },
        {
            path: '/certificate',
            name: 'certificate',
            component: Certificate
        },
        {
            path: '/certificate/uploadFile',
            name: 'UploadFile',
            component: UploadFile
        },
        {
            path: '/certificate/uploadDriver',
            name: 'UploadDriver',
            component: UploadDriver
        },
        {
            path: '/certificate/uploadComplete',
            name: 'UploadComplete',
            component: UploadComplete
        },
        {
            path: '/safe',
            name: 'safe',
            component: Safe
        },
        {
            path: '/environ',
            name: 'environ',
            component: Environ
        },
        {
            path: '/appoint',
            name: 'appoint',
            component: Appoint
        },
        {
            path: '/home',
            name: 'home',
            component: Home
        }
    ]
})