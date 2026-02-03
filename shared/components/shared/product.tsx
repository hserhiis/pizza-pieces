// @flow
import * as React from 'react';
import {cn} from "@/shared/lib/utils";
import Image from "next/image";
import {Title} from "@/shared/components/shared";
import Link from "next/dist/client/link";
import {Button} from "@/shared/components/ui";
import {PlusIcon} from "lucide-react";
import {ProductVariantType} from "@/types";

interface Props {
    id: number;
    imagePath: string;
    name: string;
    variants: ProductVariantType[];
    description: string;
    className?: string;
}

export const Product: React.FC<Props> = (
    {
        id,
        imagePath,
        name,
        variants,
        description,
        className
    }
) => {
    return (
        <Link href="/product/1" className={cn('flex flex-col gap-4', className)}>
            <div className="flex justify-center p-7 rounded-lg bg-secondary">
                <Image className="w-[215px] h-[215px]" src={imagePath} alt={"Pizza"} width={300} height={300} />
            </div>
            <Title className="font-bold" text={name} size="md" />
            <p className="text-md text-gray-400 h-16">
                {description}
            </p>
            <div className="flex justify-between items-center">
                <span className="font-bold">{"$" + variants[0].price}</span>
                <Button variant="outline" className="text-sm">
                    <PlusIcon className="w-4 h-4 mr-1" />
                    Add to cart
                </Button>
            </div>
        </Link>
    );
};