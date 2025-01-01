"use client";
import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  ReactNode,
} from "react";

interface HomeBodyContextType {
  lastframeurl: string | null;
  homeVideoFlag: boolean;
}

const HomeBodyContext = createContext<HomeBodyContextType | undefined>(
  undefined
);

// Hook to access the HomeBody context
export const useHomeBodyContext = (): HomeBodyContextType => {
  const context = useContext(HomeBodyContext);
  if (!context) {
    throw new Error("useHomeBodyContext must be used within a HomeBodyWrapper");
  }
  return context;
};

interface HomeBodyWrapperProps {
  children: ReactNode;
}

const HomeBodyWrapper: React.FC<HomeBodyWrapperProps> = ({ children }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const parentVideoRef = useRef<HTMLDivElement>(null);
  const [lastframeurl, setLastFrameURL] = useState<string | null>(null);
  const [homeVideoFlag, setHomeVideoFlag] = useState<boolean>(false);

  useEffect(() => {
    const video = videoRef.current;

    const handleVideoEnd = () => {
      if (!video) return;

      const canvas = document.createElement("canvas");
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
      const frameURL = canvas.toDataURL();
      setLastFrameURL(frameURL);
      setHomeVideoFlag(true);
      if (parentVideoRef.current) {
        parentVideoRef.current.style.display = "none";
      }
      setTimeout(() => parentVideoRef.current?.replaceWith(""), 1000);
    };

    video?.addEventListener("ended", handleVideoEnd);

    return () => {
      video?.removeEventListener("ended", handleVideoEnd);
    };
  }, []);

  return (
    <HomeBodyContext.Provider value={{ lastframeurl, homeVideoFlag }}>
      <div
        className="flex relative justify-center items-center w-screen h-screen"
        ref={parentVideoRef}
      >
        {!lastframeurl && (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="object-cover absolute top-0 left-0 w-full h-full"
          >
            <source src="/videos/Hero.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
      <div className="relative z-10 w-full h-full">{children}</div>
    </HomeBodyContext.Provider>
  );
};

export default HomeBodyWrapper;
