import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    { path: '/', component: () => import('../components/Home.vue') },
    { path: '/student/dashboard', component: () => import('../components/Student/Dashboard.vue') },
    { path: '/teacher/dashboard', component: () => import('../components/Teacher/Dashboard.vue') },
    { path: '/admin/dashboard', component: () => import('../components/Admin/Dashboard.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
