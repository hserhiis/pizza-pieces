// @flow
import * as React from 'react';
import {cn} from "@/shared/lib/utils";
import Image from "next/image";
import {Title} from "@/shared/components/shared";
import Link from "next/dist/client/link";

interface Props {
    id: string;
    imagePath: string;
    name: string;
    price: number;
    description: string;
    className?: string;
};

export const Product: React.FC<Props> = ({
    id,
    imagePath,
    name,
    price,
    description,
    className
                                         }) => {
    return (
        <div className={cn('flex flex-col gap-4', className)}>
            <div className="flex justify-center p-7 rounded-lg bg-secondary">
                <Image className="w-[215px] h-[215px]" src={imagePath} alt={"Pizza"} width={300} height={300} />
            </div>
            <Title className="font-bold" text="Cheese Chicken" size="md" />
            <p className="text-md text-gray-400">
                Chicken, mozzarella, cheddar and parmesan cheeses, cheese sauce, tomatoes, alfredo sauce, garlic.
            </p>
            <div className="flex justify-between items-center">
                <span className="font-bold">$12.99</span>
                <a className="text-primary cursor-pointer">Add +</a>
            </div>
        </div>
    );
};