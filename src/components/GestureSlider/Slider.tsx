"use client";
import React, { useRef, useState, useEffect } from "react";
import CardsWrapper from "../Wrappers/CardsWrapper";
import Image from "next/image";
import useSlider from "@/hooks/useSlider";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

interface DataItem {
    id: number;
    title: string;
    desc: string;
    image: string;
    url: string;
}

interface DataProps {
    Data: DataItem[];
    link: string;
    firstSizes: string;
    Imagestyle?: string;
}

const Slider = (props: DataProps) => {
    const categoryRef = useRef<HTMLDivElement>(null);
    const [categorySlideWidth, setCategorySlideWidth] = useState(0);
    const [totalWidth, setTotalWidth] = useState(0);

    // Handle the image index and gestures
    const { HandleGestureSlider, imageIndex, nextHandle, prevHandle } =
        useSlider(props.Data);

    //Get the slider width after the component is mounted
    useEffect(() => {
        if (categoryRef.current) {
            setCategorySlideWidth(categoryRef.current.clientWidth);
            setTotalWidth(categoryRef.current.clientWidth * props.Data.length); // Calculate total width
        }
        // Recalculate on window resize
        const handleResize = () => {
            if (categoryRef.current) {
                setCategorySlideWidth(categoryRef.current.clientWidth);
                setTotalWidth(categoryRef.current.clientWidth * props.Data.length); // Recalculate total width
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, [props.Data.length]);

    return (
        <CardsWrapper className = "w-[100%] flex items-center gap-[20px] overflow-x-hidden border-2 relative">
            <div
                className="scroll-bar-hide overflow-x-auto w-[100%] flex gap-[20px] transition-transform ease-in-out duration-300 px-[20px]"
                style={{
                    transform: `translateX(-${Math.min(imageIndex * categorySlideWidth, totalWidth - categorySlideWidth)
                        }px)`, // Ensure it does not exceed the total width
                }}
                onTouchStart={HandleGestureSlider}
            >
                {props.Data.map((data) => (
                    <div
                        className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 ${imageIndex === data.id ? "active" : ""
                            }`}
                        key={data.id}
                        ref={categoryRef}
                       
                    >
                        <div className="w-full flex relative h-80">
                            <Image
                                src={data.image}
                                fill
                                sizes={props.firstSizes}
                                className={`object-cover rounded-md ${props.Imagestyle}`}
                                alt={data.title}
                            />
                        </div>
                        <div className="py-[10px]">
                            <span>{data.title}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute top-[50%] m-auto flex justify-between w-full px-4">
                <button className="text-[3rem] text-transparent hover:text-black" type="button" onClick={prevHandle}>
                    <AiFillCaretLeft />
                </button>
                <button className="text-transparent hover:text-black"  type="button" onClick={nextHandle}>
                    <AiFillCaretRight />
                </button>
            </div>
        </CardsWrapper>
    );
};

export default Slider;
