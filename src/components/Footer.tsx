import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import ItemsContainer from "./ItemsContainer"
import { ArrowRight, ArrowUp, CornerRightUp } from "lucide-react"
import { Button, buttonVariants } from "./ui/button"

const Footer = () => {
    return (
        <>
            <footer className="bg-gradient-to-r from-primary to-green-700 text-white mt-20">
                <div className=" bg-gray-100 border border-t border-gray-200">
                    <MaxWidthWrapper>
                        <div className="lg:flex lg:justify-between lg:items-center sm:px-12 px-4 py-7 gap-5">
                            <h1
                                className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl w-3/5"
                            >
                                Werde Teil der Veränderung mit <span className="text-primary">Woltu Energy</span> - Kontaktieren Sie uns.
                            </h1>
                            <div className="mt-5 md:mt-5 lg:mt-0 flex items-center gap-5">
                                <Button variant="outline" className="text-gray-900"><Link href="mailto:info@woltuenger.com?subject=Terminvereinbarung" className="flex items-center gap-2">Termin vereinbaren <ArrowRight className="pl-2" /></Link></Button>
                                <Link href='/#start' className={buttonVariants()}>Jetzt entdecken</Link>
                            </div>
                        </div>
                    </MaxWidthWrapper>
                </div>
                <MaxWidthWrapper>
                    <ItemsContainer />
                    <div
                        className="flex flex-col items-start sm:flex-col gap-5 md:flex-row md:items-center  md:justify-between text-gray-400 text-sm pb-8"
                    >
                        <span>© 2024 Ember Concept. All rights reserved.</span>
                        <div className="cursor-pointer transition-all hover:text-gray-100">
                            <Button variant="outline">
                                <Link href="#" className="flex items-center">
                                    <ArrowUp className="w-5 h-5" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </footer >
        </>
    )
}

export default Footer