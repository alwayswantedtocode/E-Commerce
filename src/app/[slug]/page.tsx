import React from 'react'
import ProductImages from "@/components/Single Pages/ProductImages"
import CustomizeProduct from '@/components/Single Pages/CustomizeProduct'
import Add from "@/components/Single Pages/Add"
import { wixClientServer } from '@/lib/wixClientServer'
import { notFound } from 'next/navigation'
const SinglePage = async ({ params }: { params: { slug: string } }) => {


  const wixClient = await wixClientServer();
  const products = await wixClient.products
    .queryProducts()
    .eq("slug", params.slug)
    .find();

  if (!products.items[0]) {
    return notFound()
  }

  const product = products.items[0]
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 ">
      {/* IMG COMPONENT */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max flex-[6] ">
        <ProductImages items={product.media?.items} />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-12 flex flex-col gap-6\ flex-[6]">
        <h1 className="text-4xl font-medium">{product.name}</h1>
        <p className="text-gray-500">
          {product.description}
        </p>
        <div className='h-[2px] bg-gray-100' />
        {product.priceData?.price === product.priceData?.discountedPrice ? <h3 className='text-xl text-gray-500 line-through'>₦{product.priceData?.price}</h3> : <div className="flex flex-col">
          <h3 className='text-xl text-gray-500 line-through'>₦{product.priceData?.price}</h3>
          <h2 className='font-medium text-2xl'>₦{product.priceData?.discountedPrice}</h2>
        </div>}

        <div className='h-[2px] bg-gray-100' />
        {product.variants&&product.productOptions &&<CustomizeProduct productId={product._id} variants={product.variants} productOptions={ product.productOptions} />}
        <Add />
        <div className="h-[2px] bg-gray-100 mt-[2px]" />
        {product.additionalInfoSections?.map((section: any) => {
          return (
            <div className="text-sm" key={section.title}>
              <h4>{section.title}</h4>
          <p>{section.description}</p>
        </div>
         )
       })}
       
      </div>
    </div>
  )
}

export default SinglePage