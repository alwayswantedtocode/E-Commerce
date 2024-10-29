// "use client"
import React from 'react';
import CardsWrapper from '../Wrappers/CardsWrapper';
import ImageCard from './Image card/ImageCard';
import ActionBtn from '../Resuable Buttons/actionBtn';
import { wixClientServer } from '@/lib/wixClientServer';
import DOMPurify from 'isomorphic-dompurify';
import { products } from '@wix/stores';

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({ categoryId, limit, searchParams }: { categoryId: string; limit?: number; searchParams?: any }) => {


    console.log("categorgId:", categoryId)

    const wixClient = await wixClientServer();
    console.log("Category ID:", categoryId);
    const response = await wixClient.products.queryProducts().eq("collectionIds", categoryId).limit(limit || PRODUCT_PER_PAGE).find();

    // You could sanitize data during fetching if needed


    // const Data = await response.find()



    return (
        <section className="w-[100%] flex flex-col items-center mb-[5rem]">
            {/* <div className="w-[80%] py-[10px] flex items-center justify-start">
                <h1 className='font-bold'>Featured Products</h1>
            </div> */}
            <CardsWrapper className='w-[80%] grid grid-cols-xsmallTemps md:grid-cols-smallTemp lg:grid-cols-Temps auto-rows-midLayout pt-3 lg:p-0 grid-flow-dense gap-[20px] border-2 border-red-600'>
                {response.items.map((product: products.Product) => (
                    <div className="w-[100%] border-blue700" key={product._id}>
                        <ImageCard
                            // link={`'/' ${product.slug}`}
                            link={'/' + product.slug}
                            firstImage={product.media?.mainMedia?.image?.url || "/product.png"}
                            secondImage={product.media?.items[1]?.image?.url || "/product.png"}
                            product={{
                                __html: DOMPurify.sanitize(
                                    product.additionalInfoSections.find(
                                        (section: any) => section.title === "shortDesc"
                                    )?.description || ""
                                ),
                            }}  // Use sanitized description
                            description={product.name}
                            amount={product.priceData?.price}
                            firstSizes="100vw"
                            secondSizes="100vw"
                            firstImagestyle=''
                            SecondImagestyle=''
                        />
                        <div className="w-[100%] py-[7px]">
                            <ActionBtn
                                Label="Add to Cart"
                                btnClass="text-red-400 w-[7rem] p-[5px] rounded-[5px] bg-white border-2 border-red-400 hover:bg-red-100 hover:text-white font-semi-bold"
                                linkClass=""
                                link="/cart"
                                type="button"
                            />
                        </div>
                    </div>
                ))}
            </CardsWrapper>
        </section>
    );
};

export default ProductList;
