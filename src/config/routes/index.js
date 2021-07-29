import Display from "../../pages/Display";
import Home from "../../pages/Home";
import Signup from "../../pages/Signup";

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/display',
    component: Display,
  },
];