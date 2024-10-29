import React from "react";
import CardsWrapper from "../Wrappers/CardsWrapper";
import Image from "next/image";
import { wixClientServer } from "@/lib/wixClientServer";
import Link from "next/link";
import useSlider from "@/hooks/useSlider";


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

const CategoriesSlide = async () => {
 

 
    const wixClient = await wixClientServer()
    const Categories = await wixClient.collections.queryCollections().find();

    // const data = Categories.items;
    // // Handle the image index and gestures
    // const { imageIndex } =
    //     useSlider(data);
    return (
        <CardsWrapper className="w-[100%] flex items-center gap-[20px]  relative">
            <div
                className="scroll-bar-hide overflow-x-auto w-[100%] flex gap-[20px] transition-transform ease-in-out duration-300 px-[20px]"
            >
                {Categories.items.map((item) => (

                    <Link href={`/list?cat=${item.slug}`}  className={`flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6 `}
                    key={item._id}
                    >
                        {/* ${imageIndex === item.id ? "active" : ""
                                } */}
                        <div className="w-full flex relative h-80">
                            <Image
                                src={item.media?.mainMedia?.image?.url || "cat.png"}
                                fill
                                sizes="100vw"
                                className={`object-cover rounded-md `}
                                alt={"data.title"}
                            />
                        </div>
                        <div className="py-[10px]">
                            <span>{item.name}</span>
                        </div>
                    </Link>


                ))}
            </div>

        </CardsWrapper>
    );
};

export default CategoriesSlide;