"use client"
import React from 'react'
import CardsWrapper from "../Wrappers/CardsWrapper"
import ImageCard from "../home component/Image card/ImageCard"

interface DataType {
    name?: string,
    image?: string,
    product?: string,
    description?: string,
    amount?: number,
}

const SingleComponent = (props: DataType) => {
    return (
        <div>
            {/* <CardsWrapper>
                <ImageCard image={""} product={""} description={""} amount={1} width={1} height={1} imageStyle={""} />
            </CardsWrapper> */}

        </div>
    )
}

export default SingleComponent