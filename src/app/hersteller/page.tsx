import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="text-center mt-20">
                <Badge>Qualität die für sich spricht</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-2">Entdecke unsere Hersteller.</h1>

                <div className="flex justify-center mt-2">
                    <p className="max-w-prose text-muted-foreground">Erkunden Sie unser breites Spektrum an Herstellern und ihren Produkten, um die perfekte Lösung für Ihre Bedürfnisse zu finden. Von renommierten Unternehmen weltweit bieten wir Ihnen eine Vielfalt an hochwertigen Optionen.</p>
                </div>
            </section>

            <section className="mt-10">
                <div className="grid grid-cols-3 md:grid-cols-5 gap-10">
                    <Image src="/partners/logo_1.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_2.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_3.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_4.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_5.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_6.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_7.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_8.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image className="filter invert" src="/partners/logo_9.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_10.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_11.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_12.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_13.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_14.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_15.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_16.png" width={350} height={240} alt="Hersteller"></Image>
                    <Image src="/partners/logo_17.png" width={350} height={240} alt="Hersteller"></Image>
                </div>
            </section>

            <section className="mt-20 p-10 bg-gray-100 border border-gray-200 rounded-lg">
                <Badge>Partnerschaften</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Exzellente Partnerschaften: Die Auswahl führender Hersteller für erstklassige Photovoltaik-Lösungen</h1>

                <p className="text-muted-foreground mt-2">Unser Engagement für Exzellenz zeigt sich in jedem Aspekt unserer Arbeit, insbesondere in
                    der Auswahl der Komponenten, die wir verwenden und unseren Kunden verbauen.
                    Wir sind stolz darauf, ausschließlich mit den weltweit renommiertesten Herstellern
                    zusammenzuarbeiten, um sicherzustellen, dass unsere Kunden nur die besten Produkte
                    erhalten. Auf unserer neuen Website präsentieren wir stolz die Logos der Top-Hersteller,
                    deren hochwertige Komponenten wir verwenden, um erstklassige Photovoltaik-Anlagen zu
                    realisieren.
                    Unser Team von Experten wählt sorgfältig die Komponenten aus, die perfekt zu den
                    individuellen Bedürfnissen und Anforderungen unserer Kunden passen. Wir sind davon
                    überzeugt, dass nur die Verwendung der besten Komponenten die langfristige Leistung
                    und Zuverlässigkeit Ihrer Photovoltaik-Anlage gewährleisten kann.
                    Darüber hinaus möchten wir betonen, dass wir nicht an einzelne Hersteller gebunden sind.
                    Unser Kundeninteresse steht stets im Mittelpunkt, daher treffen wir unsere Auswahl aus
                    einem breiten Spektrum an Top-Herstellern, um sicherzustellen, dass Sie die optimale
                    Lösung für Ihre Bedürfnisse erhalten</p>

                <Button className="mt-5">
                    <Link href="/" className="flex items-center gap-2">
                        Jetzt Kontakt aufnehmen
                        <ArrowRight className="pl-2"/>
                    </Link>
                </Button>
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