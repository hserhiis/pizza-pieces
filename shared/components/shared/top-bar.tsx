// @flow
import * as React from 'react';
import {Container} from "./container";
import {Categories} from "./categories";
import {SortPopup} from "@/shared/components/shared";
import {cn} from "@/shared/lib/utils";

interface Props {
    className?: string;
};
export const TopBar: React.FC<Props> = ({className}) => {
    return (
        <div className={cn('sticky top-0 py-5 shadow-lg shadow-black/5 z-50 bg-white', className)}>
            <Container className="flex items-center justify-between">
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};