// @flow
"use client"
import * as React from 'react';
import {cn} from "@/shared/lib/utils";
import {useCategoryStore} from "@/store/category";

interface Props {
    className?: string;
};

const cats = [
    {id: 1, name: "Pizzas"},
    {id: 2, name: "Combos"},
    {id: 3, name: "Salads"},
    {id: 4, name: "Sneaks"},
    {id: 5, name: "Desserts"},
    {id: 6, name: "Cold Drinks"},
    {id: 7, name: "Hot Drinks"}
]

export const Categories: React.FC<Props> = ({className}) => {
    const activeId = useCategoryStore((state) => state.activeId)

    return (
        <div className={cn('inline-flex rounded-2xl bg-gray-50 p-1.5 gap-1 mt-5', className)}>
            {
                cats.map(({id, name}) => (
                    <a key={id} className={cn(
                        'flex items-center justify-center font-bold rounded-2xl h-11 px-5 py-1',
                        id === activeId ? 'bg-white shadow-md shadow-gray-150 text-primary duration-200' : 'text-gray-500',
                        className

                    )}
                       href={`/#${name}`}
                    >

                        <button className="focus:outline-none cursor-pointer">
                            {name}
                        </button>
                    </a>
                ))
            }
        </div>
    );
};