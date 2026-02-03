// @flow
import * as React from 'react';
import {cn} from "@/shared/lib/utils";
import {Checkbox} from "@/shared/components/ui";

export interface FilterCheckboxProps {
    title: string;
    value: string;
    endAdornment?: React.ReactNode;
    onCheckedChange?: (checked: boolean) => void;
    checked?: boolean;
};

export const FilterCheckbox: React.FC<FilterCheckboxProps> = ({title, value, endAdornment, onCheckedChange, checked,
}: FilterCheckboxProps) => {
    return (
        <div className={cn('flex gap-2 items-center')}>
            <Checkbox
                id={"checkbox-" + String(value)}
                value={value}
                checked={checked}
                onCheckedChange={onCheckedChange}
                className="rounded-[8px] w-6 h-6"
            />
            <label htmlFor={"checkbox-" + String(value)} className="leading-none cursor-pointer font-light flex-1">{title}</label>
            {endAdornment}
        </div>
    );
};