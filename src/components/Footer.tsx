import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import Image from "next/image"

const Footer = () => {
    return (
        <>
            <div className="w-full pt-10 pb-10 bg-gray-100 mt-20">
                <MaxWidthWrapper>
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-20">
                        <div>
                            <Image className="w-32" src="/logo.png" width={1072} height={289} alt="WoltuLogo" />
                            <p className="mt-5 text-muted-foreground">Gemeinsam für eine nachhaltige Zukunft.</p>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Unternehmen</h3>
                            <div className="mt-2 flex flex-col gap-1 text-muted-foreground">
                                <Link href="/">Showroom</Link>
                                <Link href="/">Über uns</Link>
                                <Link href="/">Erfahrungen</Link>
                                <Link href="/">Kontakt</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Kontakt</h3>
                            <div className="mt-2 flex flex-col gap-1 text-muted-foreground">
                                <Link href="/">info@woltu-energy.de</Link>
                                <Link href="/">02751 7127 712</Link>
                                <Link href="/">Solingen</Link>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-bold">Rechtliches</h3>
                            <div className="mt-2 flex flex-col gap-1 text-muted-foreground">
                                <Link href="/">Impressum</Link>
                                <Link href="/">Datenschutzerklärung</Link>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </div>
        </>
    )
}

export default Footer