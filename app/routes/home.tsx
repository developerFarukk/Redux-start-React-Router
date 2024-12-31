import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Start Redux" },
    { name: "description", content: "Welcome to Redux!" },
  ];
}

export default function Home() {
  return <Welcome />;
}
