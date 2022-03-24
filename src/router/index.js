import {createRouter, createWebHistory}  from "vue-router";
import HomePage from "../views/HomePage";
import ProfilePage from "../views/ProfilePage";
import AimView from "../views/AimView.vue";
import LoginPage from "../views/LoginPage";
import SignUp from "../views/SignUp";

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/aim",
    name: "Aim",
    component: AimView,
  },
  {
    path: "/profile",
    name: "ProfilePage",
    component: ProfilePage,
  },
  {
    path: "/LoginPage",
    name: "LoginPage",
    component: LoginPage,
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
