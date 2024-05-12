import Link from "next/link"
import { Icons } from "./Icons"
import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight } from "lucide-react"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"

const Navbar = async () => {
    const { getUser } = getKindeServerSession()
    const user = await getUser()
    const isAdmin = user?.email === process.env.ADMIN_EMAIL
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <div className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-semibold">
                        <Image className="w-32" src="/logo.png" width={1072} height={289} alt="Woltu Energy Logo"></Image>
                    </Link>

                    <div className="h-full flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link href='/api/auth/logout' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>Sign out
                                </Link>
                                {isAdmin ? (
                                    <Link href='/admin' className={buttonVariants({
                                        size: 'sm', variant: 'ghost',
                                    })}>Dashboard ✨
                                    </Link>
                                ) : null}
                                <Link href='/' className={buttonVariants({
                                    size: 'sm', className: "hidden sm:flex items-center gap-1",
                                })}>Test <ArrowRight className="ml-1.5 h-5 w-5" />
                                </Link>
                            </>
                        ) : (
                            <>
                                {/* <Link href='/api/auth/login' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>Sign up
                                </Link> */}
                                <Link href='/about' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>Über uns
                                </Link>
                                <Link href='/standort' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>Standort Solingen
                                </Link>
                                <Link href='/showroom' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>Showrrom
                                </Link>
                                <Link href='/hersteller' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>Hersteller
                                </Link>
                                <Link href='/b2c' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>B2C
                                </Link>
                                <Link href='/b2b' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>B2B
                                </Link>
                                <Link href='/' className={buttonVariants({
                                    size: 'sm', variant: 'ghost',
                                })}>WoltuEnergy Live
                                </Link>

                                
                                <div className="h-8 w-px bg-zinc-200 hidden sm:block" />

                                <Link href='/' className={buttonVariants({
                                    size: 'sm', className: "hidden sm:flex items-center gap-1",
                                })}>Lege los <ArrowRight className="ml-1.5 h-5 w-5" />
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar