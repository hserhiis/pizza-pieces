// @flow
import * as React from 'react';
import {Container} from "./container";
import {cn} from "@/shared/lib/utils";
import Image from "next/image";
import {Button} from "@/shared/components/ui";
import {ArrowRight, ShoppingCart, User} from "lucide-react";

interface Props {
    className?: string;
};
export const Header: React.FC<Props> = ({className}) => {
    return (
        <header className={cn(className, 'border border-b ')}>
            <Container className="flex items-center justify-between py-8">
                <div className="flex items-center gap-4">
                    <Image src={"/logo.png"} alt={"Logo"} width={35} height={35} />
                    <div>
                        <h1 className="text-2xl uppercase font-bold">
                            Pizza Pieces
                        </h1>
                        <p className="text-sm text-gray-300 leading-3">
                            Delicious Pizza
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-0" data-slot="header-actions" aria-label="Header actions">
                    <Button variant="outline" className="mr-4 gap-2 flex items-center group relative">
                        <div className="flex items-center gap-1 group-hover:opacity-0" data-slot="header-user-avatar" aria-label="User avatar">
                            <User size={16} strokeWidth={3} />
                            <p>Login</p>
                        </div>
                        <User size={16} strokeWidth={3} className="w-5 opacity-0 absolute duration-300 group-hover:opacity-100" />
                    </Button>

                    <Button variant="outline" className="group relative">
                        <div className="flex items-center gap-1 transition duration-600 group-hover:opacity-0">
                            <ShoppingCart size={16} strokeWidth={3} className="h-4 w-4 relative" />
                            <b>3</b>
                        </div>
                        <ArrowRight className="w-5 opacity-0 absolute transition duration-600 -translate-x-2 group-hover:opacity-100 translate-x-0" />
                    </Button>

                </div>

            </Container>
        </header>
    );
};