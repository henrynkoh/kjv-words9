import { topics } from "@/lib/verses";
import LandingPage from "@/components/LandingPage";

export default function Home() {
  return <LandingPage topics={topics} />;
}
