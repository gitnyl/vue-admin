import { createRouter, createWebHistory } from 'vue-router';

import MainHome from "@/pages/home/MainHome";
import BoardNotice from "@/pages/board/BoardNotice";
import BoardQnA from "@/pages/board/BoardQnA";
import SendMessage from "@/pages/message/SendMessage";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: MainHome,
    },
    {
        path: "/notice-list",
        name: "noticeList",
        component: BoardNotice
    },
    {
        path: "/qna-list",
        name: "qnaList",
        component: BoardQnA
    },
    {
        path: "/send-message",
        name: "sendMessage",
        component: SendMessage
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
