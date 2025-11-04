import App from "../App";
import type { Route } from "./+types/home";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Tech Riddles Challenge" },
    { name: "description", content: "Test your knowledge with fun tech-themed riddles!" },
  ];
}

export default function Home() {
  return <App />;
}
