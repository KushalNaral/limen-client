import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/DefaultLayout.tsx", [
    index("routes/home.tsx"),
    route("docs", "pages/docs/index.tsx"),
  ]),
  layout("layouts/auth/NonAuthLayout.tsx", [
    route("/login", "./pages/auth/login.tsx"),
    route("/register", "./pages/auth/sign-up.tsx"),
    route("/verify-email", "./pages/auth/verify-email.tsx"),
  ]),
  layout("layouts/auth/DefaultLayout.tsx", [
    route("/dashboard", "./pages/dashboard/index.tsx"),
  ]),
] satisfies RouteConfig;
