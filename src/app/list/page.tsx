import Filter from '@/components/Filter'
import ImageCard from '@/components/home component/Image card/ImageCard'
import ProductList from '@/components/home component/ProductList'
import Skeleton from '@/components/Skeleton'
import CardsWrapper from '@/components/Wrappers/CardsWrapper'
import { wixClientServer } from '@/lib/wixClientServer'
import Image from 'next/image'
import React, { Suspense } from 'react'

const ListPage = async ({ searchParams }: { searchParams:any }) => {

  const wixClient = await wixClientServer()
  const categories = await wixClient.collections.getCollectionBySlug(searchParams.categories || "all-products");
 
  console.log("categories:", categories)
  const categoryId = categories.collection?._id || "00000000-000000-000000-000000000001"
  console.log("categoryId:", categoryId)

  return (
    <div className='w-[100%] flex flex-col items-center justify-center '>
      {/* Banner */}
      <div className="w-[80%] hidden bg-pink-50 px-4 sm:flex justify-between h-64">
        <div className="w-2/3 flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl font-semibold leading-[48px] text-gray-700">
            Grab up to 50% off on
            <br /> Selected Products
          </h1>
          <button className="border-2 border-white rounded-3xl bg-red-400 text-white w-max py-3 px-5 text-sm">
            Buy Now
          </button>
        </div>
        <div className="relative w-1/3">
          <Image src="/woman.png" alt="" fill className="object-contain" />
        </div>
      </div>
      {/* Sort product with filter */}
      <div className="w-[100%] flex item center justify-center">
        <Filter />
      </div>
      <CardsWrapper className='w-[80%] ]'>
        <h1 className='mt-12 text-xl font-semibold'>{categories?.collection?.name}</h1>
        <Suspense fallback={<Skeleton />}>
          <ProductList
            categoryId={
              categoryId
            }
            searchParams={searchParams}
          /> 
        </Suspense>

      </CardsWrapper >

    </div>
  )
}

export default ListPage