import React from "react";

const createMainHeaderAnimation = async (
    flag: boolean, // boolean
    videoElement: HTMLVideoElement | null, // HTMLVideoElement | null
    parentElement: HTMLElement | null, // HTMLElement | null
    headerElement: HTMLElement | null // HTMLElement | null
): Promise<void> => {
    if (videoElement && parentElement) {
        const action = flag ? 'add' : 'remove';

        // Apply classes to the parent element
        parentElement.classList[action](
            "before:w-full",
            "before:h-1/5",
            "before:block",
            "before:absolute",
            "before:inset-0",
            "before:bg-white",
            "before:z-10"
        );

        // Apply transformation to the video element
        videoElement.classList[action]("translate-y-[10%]");
    }

    // If headerElement is not provided, no need to fetch it again.
    if (headerElement) {
        headerElement.style.transition = 'transform 0.5s ease-in-out'; // Smooth animation
        headerElement.style.transform = flag ? 'translateY(0)' : 'translateY(-100%)';
    }
};

export const MainHeaderAnimation = async (
    flag: boolean, // boolean
    videoRef: React.RefObject<HTMLVideoElement | null> // React Ref Object
): Promise<void> => {
    const videoElement = videoRef.current;

    if (videoElement) {
        const parentElement = videoElement.parentElement;
        const headerElement = document.getElementById('Header'); // Dynamically query the header element

        // Pass headerElement only if it exists
        await createMainHeaderAnimation(flag, videoElement, parentElement, headerElement);
    }
};
