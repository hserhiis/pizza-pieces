// @flow
"use client"
import * as React from 'react';
import {Title} from "@/shared/components/shared/title";
import {cn} from "@/shared/lib/utils";
import {Product} from "@/shared/components/shared";
import {ProductType, ProductVariantType} from "@/types";
import {useIntersection} from "react-use";
import {RefObject} from "react";
import {useCategoryStore} from "@/store/category";


const variants: ProductVariantType[] = [
    {
        size: "Small",
        types: ["Whole", "Rye", "White"],
        price: 12.99
    },
    {
        size: "Medium",
        types: ["Whole", "Rye", "White"],
        price: 15.99
    },
    {
        size: "Large",
        types: ["Whole", "Rye", "White"],
        price: 18.99
    }
]

interface Props {
    id: number;
    title: string;
    products: ProductType[];
    className?: string;
};

export const ProductsGroup: React.FC<Props> = (
    {
        id,
        title,
        products,
        className
    }
) => {
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId)
    const intersectionRef = React.useRef<HTMLDivElement>(null)
    const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, {
        root: null,
        rootMargin: "0px",
        threshold: 0.4
    })

    React.useEffect(() => {
        if (intersection?.isIntersecting) {
            setActiveCategoryId(id)
        }
    }, [intersection?.isIntersecting, id])

    return (

        <div id={`${title}`} ref={intersectionRef} className="mt-10" data-slot="products-group" aria-label="Products group">
            <Title className="mb-6 font-bold" size="lg" text={title} />
            <div className={cn('grid grid-cols-3 gap-5', className)}>
                {
                    products.map((product, index) => (
                        <Product
                            key={product.id}
                            id={product.id}
                            imagePath={product.imagePath}
                            name={product.name || "Pizza"}
                            variants={variants}
                            description={product.description || "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
                        />
                    ))
                }
            </div>
        </div>

    );
};