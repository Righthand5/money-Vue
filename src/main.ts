import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
// import tagListModel from '@/models/tagListModel';
// import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout',Layout)
Vue.component('Icon',Icon)
//全局变量太多
//严重依赖window


new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');

window.onload = function (){
    setTimeout(function (){
        window.scrollTo(0,10000);
    },0)
}
if(document.documentElement.clientWidth > 500){
    window.alert('请使用手机打开页面，以保证浏览效果')
    const img = document.createElement('img')
    img.src = './website.png'
    img.style.position = 'fixed'
    img.style.left = '50%'
    img.style.top = '50%'
    img.style.transform = 'translate(-50%,-50%)';
    img.style.boxShadow = '0 0 10px rgba(0,0,0,0.25)'
    document.body.appendChild(img)
}