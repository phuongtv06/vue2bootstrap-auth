import Vue from 'vue';
import App from './App.vue';
import router from './router';
import firebase from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCMbJAWFjIQfu6dGQn1O-ySJigWYIcwulA",
    authDomain: "vue-firebaseauth-e32dc.firebaseapp.com",
    projectId: "vue-firebaseauth-e32dc",
    storageBucket: "vue-firebaseauth-e32dc.appspot.com",
    messagingSenderId: "393870030929",
    appId: "1:393870030929:web:1ecd341a557183e208a070",
    measurementId: "G-8YNY6NGL84"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');