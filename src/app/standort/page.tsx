import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react"
import Image from "next/image"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="mt-20 text-center flex flex-col items-center">
                <Badge>Unser Hauptquatier</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-5">Standort Solingen</h1>
                <p className="text-muted-foreground max-w-prose mt-5">Willkommen im Herzen von Woltu Energie – unser Headquarter in Solingen strahlt
                    Innovationskraft und Nachhaltigkeit aus. Hier werden visionäre Ideen geboren und
                    umgesetzt, um eine grünere Zukunft zu gestalten. Ein Ort, an dem Technologie und
                    Umweltbewusstsein Hand in Hand gehen. Schauen Sie vorbei und erleben Sie unsere Mission
                    hautnah.</p>

                <div className="grid grid-cols-2 gap-5 mt-10">
                    <Image className="rounded-lg" src="/standort/1.jpg" width={2967} height={2225} alt="Firma"></Image>
                    <Image className="rounded-lg" src="/standort/2.jpg" width={2443} height={1832} alt="Firma"></Image>
                    <Image className="col-span-2 rounded-lg" src="/standort/3.jpg" width={3000} height={2250} alt="Firma"></Image>
                </div>

                <div className="grid grid-cols-1 gap-5 w-full mt-10 md:grid-cols-5">
                    <div className="col-span-2 text-left">
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Über 45.000 Quadratmeter Lagerfläche.</h1>
                    </div>
                    <div className="col-span-3 text-left md:pl-20">
                        <p className="text-muted-foreground">Entdecken Sie unser Zentrallager in Solingen - die 45.000qm Fläche ist Quelle für alle
                            Komponenten Ihrer Photovoltaikanlage von Top-Herstellern und sorgt für kürzeste
                            Lieferzeiten bei unseren Kunden.</p>
                        <Button variant="outline" className="mt-2">
                            Hersteller anschauen
                            <ArrowRight className="pl-2" />
                        </Button>
                    </div>
                </div>
                <Separator className="mt-10" />
            </section>


            <section className="mt-20">
                <Badge>Solingen</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Besuchen Sie uns.</h1>
                <p className="mt-2 text-muted-foreground">Erkunden Sie unsere Firma Woltu Energy vor Ort im schönen Solingen.</p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
                    <div className="col-span-1/2 flex flex-col gap-10">
                        <div className="flex flex-col gap-2">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gray-100">
                                <Mail className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mt-2">E-Mail</h3>
                            <div>
                                <p className="text-muted-foreground">Kontaktieren Sie uns noch heute.</p>
                                <p>info@woltu-energy.de</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gray-100">
                                <Phone className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mt-2">Telefom</h3>
                            <div>
                                <p className="text-muted-foreground">Kundensupport Werktags bis 18 Uhr.</p>
                                <p>+49 1274 1725 712</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="w-14 h-14 rounded-lg flex items-center justify-center bg-gray-100">
                                <MapPin className="w-7 h-7 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl mt-2">Standort</h3>
                            <div>
                                <p className="text-muted-foreground">Solingen 12 bergstraße 12</p>
                                <Button variant="outline" className="mt-2">
                                    Route planen
                                    <ArrowRight className="pl-2" />
                                </Button>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <div className="w-full h-full bg-gray-100 rounded-lg"></div>
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
                            <p className="font-semibold col-span-1/2">Wie funktioniert Solarenergie?</p>
                            <p className="text-muted-foreground col-span-2">Solarstrom funktioniert, indem er die Sonnenstrahlen einfängt und sie in nutzbaren Strom umwandelt. Solarpaneele, bestehend aus Photovoltaikzellen, absorbieren Sonnenlicht und erzeugen Gleichstrom (DC)-Strom. Ein Wechselrichter wandelt dann den Gleichstrom in Wechselstrom (AC)-Strom um, der verwendet werden kann, um Häuser und Unternehmen mit Strom zu versorgen. Überschüssiger Strom kann in Batterien gespeichert oder ins Netz eingespeist werden.</p>
                        </div>
                    </div>
                    <div>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                            <p className="font-semibold col-span-1/2">Sind Solarpaneele teuer?</p>
                            <p className="text-muted-foreground col-span-2">Obwohl die anfänglichen Kosten für die Installation von Solarpaneelen hoch sein können, können sie Ihnen langfristig Geld sparen. Solarpaneele können Ihre Stromrechnungen erheblich reduzieren, indem sie Ihre eigene saubere Energie erzeugen. Darüber hinaus gibt es verschiedene staatliche Anreize und Finanzierungsmöglichkeiten, um Solarpaneele erschwinglicher zu machen.</p>
                        </div>
                    </div>
                    <div>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                            <p className="font-semibold col-span-1/2">Wie lange halten Solarpaneele?</p>
                            <p className="text-muted-foreground col-span-2">Solarpaneele sind darauf ausgelegt, langlebig zu sein und können 25 bis 30 Jahre oder länger halten. Regelmäßige Wartung und Reinigung können zu ihrer Langlebigkeit beitragen. Darüber hinaus bieten die meisten Hersteller von Solarpanelen Garantien an, die etwaige Mängel oder Leistungsprobleme während der Lebensdauer der Paneele abdecken.</p>
                        </div>
                    </div>
                    <div>
                        <Separator />
                        <div className="grid grid-cols-1 md:grid-cols-3 mt-5">
                            <p className="font-semibold col-span-1/2">Können Solarpaneele bei bewölktem Wetter funktionieren?</p>
                            <p className="text-muted-foreground col-span-2">Obwohl Solarpaneele bei direktem Sonnenlicht am effektivsten sind, können sie auch an bewölkten Tagen Strom erzeugen. Bewölktes Wetter reduziert die Menge an Sonnenlicht, das die Paneele erreicht, aber sie können dennoch eine bedeutende Menge an Strom erzeugen. Darüber hinaus haben Fortschritte in der Solartechnologie die Paneele effizienter gemacht, um Sonnenlicht auch unter schlechten Lichtverhältnissen in Strom umzuwandeln.</p>
                        </div>
                    </div>
                </div>

            </section>

            <section className="mt-20">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Immer noch Fragen?</h1>
                <p className="mt-2 text-muted-foreground max-w-prose">Kein Problem! Kontaktiere uns gerne, und wir werden deine offenen Fragen gerne klären.</p>
                <Button variant="outline" className="mt-5">
                    Kontakt aufnehmen
                    <ArrowRight className="pl-2" />
                </Button>
            </section>
        </MaxWidthWrapper>
    )
}

export default Page