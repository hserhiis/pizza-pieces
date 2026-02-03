// @flow
import * as React from 'react';
import {cn} from "@/shared/lib/utils";
import {ArrowUpDown} from "lucide-react";

interface Props {
    className?: string;
};
export const SortPopup: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('inline-flex items-center gap-1 bg-gray-50 px-5 h-14 rounded-2xl cursor-pointer', className)}>
            <ArrowUpDown size={16}  />
            <b>Sort By:</b>
            <b className="text-primary">Popular</b>
        </div>
    );
};