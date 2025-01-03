import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { getFirestore } from 'firebase/firestore';


import App from './App.vue'
import router from './router'
import { initializeApp } from 'firebase/app';
const firebaseConfig = {
    apiKey: "AIzaSyD8mn8ne4YBLU6qcdn_qJisA03PvKGQaso",
    authDomain: "ssf-web-ab742.firebaseapp.com",
    projectId: "ssf-web-ab742",
    storageBucket: "ssf-web-ab742.firebasestorage.app",
    messagingSenderId: "1014915914617",
    appId: "1:1014915914617:web:2cd79bebb883f1c4c36da8",
    measurementId: "G-J47LXF42V7"
};
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firestore
export const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

