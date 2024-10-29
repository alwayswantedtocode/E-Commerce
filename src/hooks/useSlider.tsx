"use client"
import { useState, useRef } from "react";

const useSlider = (Categories: any) => {
    const [imageIndex, setImageIndex] = useState(0);
    const startCoords = useRef({ xStart: 0, yStart: 0 });

    // Handle next slide
    const nextHandle = () => {
        if (imageIndex < Categories.length - 1) {
            setImageIndex(imageIndex + 1);
        }
    };

    // Handle previous slide
    const prevHandle = () => {
        if (imageIndex > 0) {
            setImageIndex(imageIndex - 1);
        }
    };

    // Handle touch gestures
    const HandleGestureSlider = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        startCoords.current = { xStart: touch.clientX, yStart: touch.clientY };

        const handleTouchMove = (moveEvent: TouchEvent) => {
            const touchMove = moveEvent.touches[0];
            const xDiff = touchMove.clientX - startCoords.current.xStart;
            const yDiff = touchMove.clientY - startCoords.current.yStart;

            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                if (xDiff > 0) {
                    prevHandle();
                } else {
                    nextHandle();
                }
            }
        };

        const handleTouchEnd = () => {
            document.removeEventListener("touchmove", handleTouchMove);
            document.removeEventListener("touchend", handleTouchEnd);
        };

        document.addEventListener("touchmove", handleTouchMove);
        document.addEventListener("touchend", handleTouchEnd);
    };

    return {
        HandleGestureSlider,
        imageIndex,
        nextHandle,
        prevHandle,
    };
};

export default useSlider;
