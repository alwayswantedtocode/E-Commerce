// "use client"

import Categories from "@/components/home component/categories"
import FeatureProduct from "@/components/home component/ProductList"
import HeroSlider from "@/components/home component/heroSlider"
import NewProduct from "@/components/home component/newProduct"
import { WixClientContext } from "@/context/wixContext"
import { useWixClient } from "@/hooks/useWixClient"
import { wixClientServer } from "@/lib/wixClientServer"
import { Suspense, useContext, useEffect } from "react"


const Page = async () => {
  // const wixClient = await wixClientServer()

  // const response = await wixClient.products.queryProducts().find(); 
  // console.log(response)
  
  // const wixClient = useWixClient()

  // useEffect(() => {
    
  //   const getProduct = async () => {
  //     const response = await wixClient.products.queryProducts().find(); 
  //   console.log(response)
  //   }
  //   getProduct()
  // }, [wixClient])
  


  return (
    <section className='w-[100vw]flex flex-col'>
      <HeroSlider />
      <Suspense fallback={"loading"}>
        <FeatureProduct categoryId={process.env.FEATURED_PRODUCTS_CATEGORY_ID!} limit={4} />
      </Suspense>
      <Categories />
      <NewProduct />
    </section>
  )
}

export default Page

// const wixClient = createClient({
