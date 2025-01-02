"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";
import { MainHeaderAnimation } from "../Animations/Hero";

const HomeBodyContext = createContext<{ homeVideoFlag: boolean } | undefined>(
  undefined
);

export const useHomeBodyContext = () => {
  const context = useContext(HomeBodyContext);
  if (!context)
    throw new Error("useHomeBodyContext must be used within a HomeBodyWrapper");
  return context;
};

const HomeBodyWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [homeVideoFlag, setHomeVideoFlag] = useState(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => setHomeVideoFlag(true);

    // Apply animation on component mount and based on the flag
    MainHeaderAnimation(homeVideoFlag, videoRef);

    video?.addEventListener("ended", handleVideoEnd);
    return () => video?.removeEventListener("ended", handleVideoEnd);
  }, [homeVideoFlag]); // Re-run when `homeVideoFlag` changes

  return (
    <HomeBodyContext.Provider value={{ homeVideoFlag }}>
      <div className="relative z-10 w-full h-full">
        {children}
        <div className="flex relative justify-center items-center w-full h-screen overflow-hidden ">
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="object-cover absolute inset-0 size-full power3_in transition-all"
          >
            <source src="/videos/Hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </HomeBodyContext.Provider>
  );
};

export default HomeBodyWrapper;
