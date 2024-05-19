import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="mt-20 text-center flex flex-col items-center">
                <Badge>Unser Hauptquatier</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-5">Standort Solingen</h1>
                <p className="text-muted-foreground max-w-prose mt-5 text-justify">Willkommen im Herzen von Woltu Energy – unser Headquarter in Solingen strahlt
                    Innovationskraft und Nachhaltigkeit aus. Hier werden visionäre Ideen geboren und umgesetzt, um
                    eine grünere Zukunft zu gestalten. Ein Ort, an dem Technologie und Umweltbewusstsein Hand in
                    Hand gehen. Schauen Sie vorbei und erleben Sie unsere Mission hautnah.</p>

                <div className="grid grid-cols-2 gap-5 mt-10">
                    <Image className="rounded-lg" src="/img/Bild_13.JPG" width={6000} height={3374} alt="Firma"></Image>
                    <Image className="rounded-lg" src="/img/Bild_14.JPG" width={4000} height={2250} alt="Firma"></Image>
                    <Image className="col-span-2 rounded-lg" src="/img/Bild_15.JPG" width={6000} height={4000} alt="Firma"></Image>
                </div>

                <div className="grid grid-cols-1 gap-5 w-full mt-10 md:grid-cols-5">
                    <div className="col-span-2 text-left">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Über 45.000 Quadratmeter Lagerfläche.</h1>
                    </div>
                    <div className="col-span-3 text-left md:pl-20">
                        <p className="text-muted-foreground text-justify">Entdecken Sie unser Zentrallager in Solingen - die 45.000qm Fläche ist Quelle für alle
                            Komponenten Ihrer Photovoltaikanlage von Top-Herstellern und sorgt für kürzeste Lieferzeiten bei
                            unseren Kunden.</p>
                        <Button variant="outline" className="mt-2">
                            <Link href="/hersteller" className="flex items-center gap-2">
                                Hersteller anschauen
                                <ArrowRight className="pl-2" />
                            </Link>
                        </Button>
                    </div>
                </div>
                <Separator className="mt-10" />
            </section>


            <section className="mt-20">
                <Badge>Solingen</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Besuchen Sie uns.</h1>
                <p className="mt-2 text-muted-foreground">Erkunden Sie unsere Firma Woltu Energy vor Ort im schönen Solingen.</p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-5">
                    <div className="col-span-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gray-100">
                                <Mail className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mt-2">E-Mail</h3>
                            <div>
                                <p className="text-muted-foreground">Kontaktieren Sie uns noch heute.</p>
                                <p>info@woltuenergy.com</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gray-100">
                                <Phone className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mt-2">Telefom</h3>
                            <div>
                                <p className="text-muted-foreground">Kundensupport werktags bis 18 Uhr.</p>
                                <p>+49 212 23283497</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gray-100">
                                <MapPin className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mt-2">Standort</h3>
                            <div>
                                <p className="text-muted-foreground">Dellenfeld 25 I 42653 Solingen</p>
                                <Button variant="outline" className="mt-2">
                                    <Link target="_blank" className="flex items-center gap-2" href="https://www.google.de/maps/dir//Dellenfeld+25,+42653+Solingen/@51.2010284,7.0812144,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x47b8d414012322df:0xb0f28ca3db0edfe2!2m2!1d7.0830791!2d51.2008372!3e0?entry=ttu">
                                        Route planen
                                        <ArrowRight className="pl-2" />
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="w-full min-h-96 h-full bg-[url('/Maps.png')] bg-cover bg-center rounded-lg"></div>
                    </div>
                </div>
            </section>

            <section className="mt-20">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">FAQs</h1>
                <p className="text-muted-foreground max-w-prose mt-5">Entdecken Sie umfassende Antworten auf häufig gestellte Fragen rund um Solarenergie sowie unsere breite Palette an Produkten und Dienstleistungen.</p>

                <div className="mt-10 flex flex-col gap-5">
                    <div>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                            <p className="font-semibold col-span-1/2">Wie funktioniert eine Photovoltaik-Anlage?</p>
                            <p className="text-muted-foreground col-span-2">Eine Photovoltaik-Anlage wandelt Sonnenlicht direkt in elektrische Energie um. Solarzellen, die
                                aus Silizium bestehen, absorbieren Photonen aus Sonnenlicht, wodurch ein elektrischer Strom
                                erzeugt wird.</p>
                        </div>
                    </div>
                    <div>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                            <p className="font-semibold col-span-1/2">Welche Größe an Photovoltaik-Anlage <br /> benötige ich?</p>
                            <p className="text-muted-foreground col-span-2">Die benötigte Größe Ihrer Photovoltaik-Anlage hängt von Ihrem Energiebedarf, dem verfügbaren
                                Platz für die Installation der Module und anderen individuellen Faktoren ab. Unser Team berät
                                Sie gerne und plant mit Ihnen zusammen die optimale Anlage.</p>
                        </div>
                    </div>
                    <div>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                            <p className="font-semibold col-span-1/2">Wie lange dauert die Installation einer Photovoltaik-Anlage?</p>
                            <p className="text-muted-foreground col-span-2">Die Installationsdauer hängt von der Größe der Anlage und den örtlichen Gegebenheiten ab. In
                                der Regel dauert die Installation einer Standardanlage für ein Einfamilienhaus zwischen 4 bis 6
                                Wochen.</p>
                        </div>
                    </div>
                    <div>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                            <p className="font-semibold col-span-1/2">Welche staatlichen Förderungen gibt es für Photovoltaik-Anlagen?</p>
                            <p className="text-muted-foreground col-span-2">In Deutschland gibt es verschiedene staatliche Förderungen und finanzielle Anreize für
                                Photovoltaik-Anlagen, darunter das Erneuerbare-Energien-Gesetz (EEG), das KfW-Programm
                                und die Einspeisevergütung. Unsere Experten informieren Sie gerne über die aktuellen
                                Fördermöglichkeiten.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="mt-20">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Immer noch Fragen?</h1>
                <p className="mt-2 text-muted-foreground max-w-prose">Kein Problem! Kontaktiere uns , und wir werden deine offenen Fragen gerne klären.</p>
                <Button variant="outline" className="mt-5">
                    Kontakt aufnehmen
                    <ArrowRight className="pl-2" />
                </Button>
            </section>
        </MaxWidthWrapper>
    )
}

export default Page
