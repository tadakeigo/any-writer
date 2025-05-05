import { siteConfig } from "@/config/site";
import Link from "next/link";

export default function SiteFooter() {
    return (
        <footer>
            <div className="container py-10 md:py-0 md:h-20">
                <p className="text-center text-sm md:text-left">Built by {''}
                    <Link href={siteConfig.links.github} target='_blank' rel='noreferrer' className="underline underline-offset-4 font-medium">
                        Keigo Tada
                    </Link>
                    . Hosted on {''}
                    <Link href='https://vercel.com' target='_blank' rel='noreferrer' className="underline underline-offset-4 font-medium">   
                        Vercel
                    </Link>
                </p>
            </div>
        </footer>
    )
    
};
