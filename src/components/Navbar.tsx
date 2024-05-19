'use client'

import Link from "next/link"
import Image from "next/image"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { buttonVariants } from "./ui/button"
import { ArrowRight, Menu, X } from "lucide-react"
import { Popover, Transition } from "@headlessui/react"
import { Fragment } from "react"

const Navbar = async () => {
    return (
        <nav className="sticky z-[100] h-14 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/75 backdrop-blur-lg transition-all">
            <MaxWidthWrapper>
                <Popover className="flex h-14 items-center justify-between border-b border-zinc-200">
                    <Link href='/' className="flex z-40 font-semibold">
                        <Image className="w-32" src="/logo.png" width={1072} height={289} alt="Woltu Energy Logo"></Image>
                    </Link>

                    <div className="lg:hidden">
                        <Popover.Button className="inline-flex items-center- justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                            <span className="sr-only">Open menu</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                    </div>

                    <Transition
                        as={Fragment}
                        enter="duration-200 ease-out"
                        enterFrom="opacity-0 scale-95"
                        enterTo="opacity-100 scale-100"
                        leave="duration-100 ease-in"
                        leaveFrom="opacity-100 scale-100"
                        leaveTo="opacity-0 scale-95"
                    >
                        <Popover.Panel
                            focus
                            className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition lg:hidden z-[200]"
                        >
                            <div className="rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 divide-y-2 divide-gray-50">
                                <div className="px-5 pt-5 pb-6">
                                    <div className="flex items-center justify-between">
                                        <Link href='/' className="flex z-40 font-semibold">
                                            <Image className="w-32" src="/logo.png" width={1072} height={289} alt="Woltu Energy Logo"></Image>
                                        </Link>
                                        <div className="-mr-2">
                                            <Popover.Button className="inline-flex items-center- justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                                                <span className="sr-only">Close menu</span>
                                                <X className="w-6 h-6" aria-hidden="true" />
                                            </Popover.Button>
                                        </div>
                                    </div>
                                    <div className="mt-6">
                                        <div className="grid gap-y-8">
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
                                            })}>Showroom
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
                                            <Link href='/#WoltuLive' className={buttonVariants({
                                                size: 'sm', variant: 'ghost',
                                            })}>WoltuEnergy Live
                                            </Link>
                                            <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                                            <Link href='/' className={buttonVariants({
                                                size: 'sm', className: "items-center gap-1",
                                            })}>Lege los <ArrowRight className="ml-1.5 h-5 w-5" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popover.Panel>
                    </Transition>

                    <div className="h-full hidden lg:flex items-center space-x-4">
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
                            })}>Showroom
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
                            <Link href='/#WoltuLive' className={buttonVariants({
                                size: 'sm', variant: 'ghost',
                            })}>WoltuEnergy Live
                            </Link>
                            <div className="h-8 w-px bg-zinc-200 hidden sm:block" />
                            <Link href='/' className={buttonVariants({
                                size: 'sm', className: "hidden sm:flex items-center gap-1",
                            })}>Lege los <ArrowRight className="ml-1.5 h-5 w-5" />
                            </Link>
                        </>
                    </div>

                </Popover>
            </MaxWidthWrapper>
        </nav>
    )
}

export default Navbar