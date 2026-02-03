// @flow
import * as React from 'react';
import {FilterCheckbox, FilterCheckboxProps} from "@/shared/components/shared/filter-checkbox";
import {Title} from "@/shared/components/shared/";
import {Input} from "@/shared/components/ui";

type Item = FilterCheckboxProps

interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onChange: (values: string[]) => void;
    defaultValue?: string[];
    className?: string;
};
export const CheckboxFilterGroup: React.FC<Props> = (

    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = "Search...",
        onChange,
        defaultValue,
        className
    }
) => {
    const [isExpanded, setIsExpanded] = React.useState(false);
    const [searchValue, setSearchValue] = React.useState("");

    const filterList = (value: string) => {
        setSearchValue(value);
    }

    const list = isExpanded
        ? items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()))
        : items.slice(0, limit);

    return (
        <div>
            <Title className="mb-2" text="Ingredients" size="sm" />
            <div className="mb-5">
                {
                    isExpanded &&
                    <Input
                        value={searchValue}
                        onChange={(e) => filterList(e.target.value)}
                        className="border-none bg-gray-50"
                        placeholder={searchInputPlaceholder}
                    />
                }

            </div>
            <div className="flex flex-col gap-4 max-h-96 pr-2 overflow-auto scrollbar" data-slot="checkbox-filter-group" aria-label="Checkbox filter group">
                {list.map(( item, index) => (
                    <FilterCheckbox
                        key={index}
                        {...item}
                    />
                ))}
            </div>
            {items.length > limit &&
                <div className="flex justify-start gap-2">
                    <span className="text-primary mt-3 cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
                        {isExpanded ? "- Show less" : "+ Show more"}
                    </span>
                </div>
            }
        </div>
    );
};