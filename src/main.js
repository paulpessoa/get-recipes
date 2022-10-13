import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'https://aqmyzkjbxdnotbtxxlkv.supabase.co/rest/v1';
axios.defaults.headers.common['apikey'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFxbXl6a2pieGRub3RidHh4bGt2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU0NjM4NjIsImV4cCI6MTk4MTAzOTg2Mn0.B4kxw-I33WsCrC5fi7gL4sQ1Z1jpeCjMnD1yyGHkrbM';

createApp(App).use(store).use(router).mount('#app')
