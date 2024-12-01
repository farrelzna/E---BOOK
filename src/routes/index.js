import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

// Menampung path atau url yang akan digunakan pada aplikasi

const routes = [
    {
        // path atau url
        path: '/',
        // nama route ketika dipanggil di .vue nya
        name: 'home',
        // tampilan yang akan dimunculkan
        component: Home
    }
];

//generate route yang telah didedsinisakan di routes 
const router = createRouter
({
    history: createWebHistory(),
    routes
});

export default router;