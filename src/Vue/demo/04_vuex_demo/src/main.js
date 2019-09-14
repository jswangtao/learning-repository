import Vue from 'vue'
import Counter from './Counter.vue'
import store from './store'

new Vue({
    el:"#app",
    components:{
        Counter
    },
    template:"<Counter/>",
    store
})
