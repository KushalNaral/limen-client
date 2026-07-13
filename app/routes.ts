import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layouts/DefaultLayout.tsx", [index("routes/home.tsx")]),
  layout("layouts/auth/NonAuthLayout.tsx", [
    route("/login", "./pages/auth/login.tsx"),
  ]),
] satisfies RouteConfig;
