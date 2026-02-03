// @flow
"use client"
import * as React from 'react';
import {Title, RangeSlider, FilterCheckbox} from "@/shared/components/shared";
import {Input} from "@/shared/components/ui";
import {CheckboxFilterGroup} from "@/shared/components/shared";

interface Props {
    className?: string;
};

const ingredientOptions = [
    {title: 'Pepperoni', value: '3'},
    {title: 'Mushrooms', value: '4'},
    {title: 'Onions', value: '5'},
    {title: 'Extra cheese', value: '6'},
    {title: 'Black olives', value: '7'},
    {title: 'Green peppers', value: '8'},
    {title: 'Spinach', value: '9'},
    {title: 'Tomatoes', value: '10'},
    {title: 'Olives', value: '11'},
    {title: 'Pineapple', value: '12'},
    {title: 'Bacon', value: '13'},
    {title: 'Chicken', value: '14'},
    {title: 'Salami', value: '15'},
    {title: 'Sausage', value: '16'},
    {title: 'Beef', value: '17'},
    {title: 'Chorizo', value: '18'},
    {title: 'Ground beef', value: '19'},
    {title: 'Rice', value: '20'},
    {title: 'Noodles', value: '21'},
    {title: 'Pasta', value: '22'},
    {title: 'French fries', value: '23'},
    {title: 'Corn', value: '24'},
    {title: 'Cabbage', value: '25'},
    {title: 'Carrots', value: '26'},
    {title: 'Potatoes', value: '27'},
    {title: 'Eggs', value: '28'},
    {title: 'Cheese', value: '29'},

]

export const Filters: React.FC<Props> = ({className}) => {
    return (
        <div>
            <Title text="Filters" size="md" />

            {/* Top filter */}
            <div className="flex flex-col gap-4 my-10">
                <FilterCheckbox title="Make your own" value="1" />
                <FilterCheckbox title="New" value="2" />
            </div>

            {/* Divider */}
            <div className="h-px bg-border w-full"></div>

            {/* Price range */}
            <div className="flex flex-col gap-4 my-10">
                <Title text="Price range" size="sm" />
                <div className="flex justify-between gap-2 mb-2">
                    <Input className="w-30" placeholder="0" type="number" min="0" max="100" defaultValue="0" />
                    <Input className="w-30" placeholder="100"  type="number" min="30" max="100" />
                </div>
                <RangeSlider min={0} max={100} step={1} value={[0, 100]} />
            </div>

            {/* Divider */}
            <div className="h-px bg-border w-full"></div>

            {/* Ingredients filter */}
            <div className="flex flex-col gap-4 my-10">
                <CheckboxFilterGroup
                    onChange={(values) => console.log(values)}
                    title="Ingredients"
                    items={ingredientOptions}
                    limit={5}
                />
            </div>

            {/* Divider */}
            <div className="h-px bg-border w-full"></div>

            {/* Wheat type */}
            <div className="flex flex-col gap-4 my-10">
                <FilterCheckbox title="Whole" value="30" />
                <FilterCheckbox title="Rye" value="31" />
                <FilterCheckbox title="White" value="32" />
            </div>
        </div>
    );
};