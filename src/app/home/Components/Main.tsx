import React from "react";
import Header from "@/components/Layout/header";
import { useHomeBodyContext } from "./HomeBodyWrapper";
import { useMediaQuery } from "react-responsive";

// Define the shape of media query values
interface MediaQueryValues {
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2Xl: boolean;
}

// Main Component
const Main: React.FC = () => {
  const { homeVideoFlag } = useHomeBodyContext() || {};

  // Tailwind CSS breakpoints using `react-responsive`
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const isMd = useMediaQuery({ query: "(min-width: 768px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXl = useMediaQuery({ query: "(min-width: 1280px)" });
  const is2Xl = useMediaQuery({ query: "(min-width: 1536px)" });

  // Combine media query results into an object
  const mediaQueryValues: MediaQueryValues = {
    isSm,
    isMd,
    isLg,
    isXl,
    is2Xl,
  };

  return (
    <>
      {homeVideoFlag && (
        <div className="relative z-50">
          {/* Pass mediaQueryValues as props */}
          <Header mq={mediaQueryValues} Vflage={homeVideoFlag} />
          <section></section>
        </div>
      )}
    </>
  );
};

export default Main;
