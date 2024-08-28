import { createApp } from 'vue'
import App from './App.vue'

// Layout Components
import AppHeader from "./components/Layout/AppHeader.vue";
import AppFooter from "./components/Layout/AppFooter.vue";

const app = createApp(App);

// Register the components globally
app.component('app-header', AppHeader);
app.component('app-footer', AppFooter);

// createApp(App).mount('#app')
// Mount the app to the DOM
app.mount('#app');