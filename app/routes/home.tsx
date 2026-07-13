import type { Route } from "./+types/home";
import Welcome from "@/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [{ title: "R-Client" }, { name: "description", content: "R-client!" }];
}

export default function Home() {
  return <Welcome />;
}
