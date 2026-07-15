import {
  type RouteConfig,
  index,
  layout,
  route,
} from "@react-router/dev/routes";

export default [
  // Public routes with nav (home, docs)
  layout("layouts/DefaultLayout.tsx", [
    index("routes/home.tsx"),
    route("docs", "pages/docs/index.tsx"),
  ]),
  // Non-auth routes: redirect away if already authenticated
  layout("layouts/auth/NonAuthLayout.tsx", [
    route("/login", "./pages/auth/login.tsx"),
    route("/register", "./pages/auth/sign-up.tsx"),
  ]),
  // Authenticated but email not yet verified
  layout("layouts/auth/VerifyEmailLayout.tsx", [
    route("/verify-email", "./pages/auth/verify-email.tsx"),
  ]),
  // Fully authenticated + email verified routes
  layout("layouts/auth/DefaultLayout.tsx", [
    route("/dashboard", "./pages/dashboard/index.tsx"),
  ]),
] satisfies RouteConfig;

