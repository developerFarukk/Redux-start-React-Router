
import type { Route } from "../components/main/+types/Main";
import  Main  from "../components/main/Main";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Start Redux" },
    { name: "description", content: "Welcome to Redux!" },
  ];
}

export default function Home() {
  return <Main />;
}
