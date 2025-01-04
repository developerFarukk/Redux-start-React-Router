import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [

    index("./components/pages/HomePage.tsx"),
    route("action", "./components/main/Main.tsx"),
    route("login", "./components/pages/auth/Login.tsx"),

] satisfies RouteConfig;
