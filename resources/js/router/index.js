import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('../components/Home.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
