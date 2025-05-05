"use client";

import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { buttonVariants } from "./ui/button";
import { Icon } from "./icon";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function UserAuthForm() {

    const [isGithubLoding, setIsGithubLoading] = useState<boolean>(false);
    const [isGoogleLoding, setIsGoogleLoading] = useState<boolean>(false);

    return (
        <div className="grid gap-6">
            <form>
                <div className="grid gap-2">
                    <div className="grid gap-1">
                        <Label htmlFor="email">メールアドレス</Label>
                        <Input id='email' placeholder="name@example.com" type='email' />
                    </div>
                    <button className={cn(buttonVariants())}>
                        メールアドレスでログイン
                    </button>
                </div>
            </form>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t"/>
                </div>
                <div className="relative flex justify-center text-xs">
                    <span className="text-muted-foreground px-2 bg-background">または</span>
                </div>
            </div>
            <div className="grid gap-6">
                <button 
                    className={cn(buttonVariants({variant: 'outline'}))} 
                    onClick={() => {
                        setIsGithubLoading(true);
                        signIn('github');
                    }}         
                >
                    {isGithubLoding ? (<Icon.spinner />) : (<Icon.github className='mr-2'/>)}
                    Github
                </button>
                <button 
                    className={cn(buttonVariants({variant: 'outline'}))} 
                    onClick={() => {
                        setIsGoogleLoading(true);
                        signIn('google');
                    }}         
                >
                    {isGoogleLoding ? (<Icon.spinner />) : (<Icon.google className='mr-2'/>)}
                    Google
                </button>
            </div>
        </div>
    );
};
