import Header from "@/components/Layout/header";
import Hero from "./Hero";
import { useHomeBodyContext } from "./HomeBodyWrapper";

export default function Main() {
  const { lastframeurl, homeVideoFlag } = useHomeBodyContext();
  return (
    <>
      {lastframeurl && homeVideoFlag && (
        <div>
          <Header />
          <Hero BgURL={lastframeurl} />
        </div>
      )}
    </>
  );
}