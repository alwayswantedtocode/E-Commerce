"use client"
import React from 'react'
import CardsWrapper from "../home component/Wrappers/CardsWrapper"
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
            <CardsWrapper>
                <ImageCard image={""} product={""} description={""} amount={} width={} height={} imageStyle={""} />
            </CardsWrapper>

        </div>
    )
}

export default SingleComponent