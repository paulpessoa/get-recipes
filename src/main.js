import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://tsxmljhumrcevktlgqvx.supabase.co/rest/v1';
axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzeG1samh1bXJjZXZrdGxncXZ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjc2MjUzODMsImV4cCI6MjA0MzIwMTM4M30.LOTc1YS5ws1MdsJ9RCpumU1xt4_ZQWNsyxqgZjyh8fg';

createApp(App).use(store).use(router).mount('#app')
