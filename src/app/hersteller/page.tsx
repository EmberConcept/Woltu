import MaxWidthImageWrapper from "@/components/MaxWidthImageWrapper"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <>
            <MaxWidthWrapper>
                <section className="text-center mt-20">
                    <Badge>Qualität die für sich spricht</Badge>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-2">Entdecke unsere <br /> ausgewählten Hersteller.</h1>

                    <div className="flex justify-center mt-2">
                        <p className="max-w-prose text-muted-foreground">Erkunden Sie unser breites Spektrum an Herstellern und ihren Produkten, um die perfekte Lösung
                            für Ihre Bedürfnisse zu finden. Von renommierten Unternehmen weltweit bieten wir Ihnen eine
                            Vielfalt an hochwertigen Optionen.</p>
                    </div>
                </section>
            </MaxWidthWrapper>

            <MaxWidthImageWrapper>
                <section className="mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                        <div className="border-muted border-2 p-8 rounded-lg flex flex-col justify-between">
                            <div>
                                <Image src="/img/Bild_22.jpg" width={650} height={850} alt="Set 1"></Image>
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-5">Basic Set</h1>
                                <p className="text-muted-foreground mt-2 text-justify">Huawei ist der weltweit größte Hersteller von Wechselrichtern und Batteriespeichern, während Longi als größter Modulhersteller der Welt bekannt ist. Gemeinsam bieten sie erstklassige Lösungen für Ihre Solaranlage.</p>
                            </div>
                            <Button className="mt-5 w-full">
                                <Link href="/b2c" className="flex items-center gap-2">
                                    Zum Angebot
                                    <ArrowRight className="pl-2" />
                                </Link>
                            </Button>
                        </div>
                        <div className="border-muted border-2 p-8 rounded-lg flex flex-col justify-between">
                            <div>
                                <Image src="/img/Bild_23.jpg" width={650} height={850} alt="Set 2"></Image>
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-5">Standard Set</h1>
                                <p className="text-muted-foreground mt-2 text-justify">Trina Solar, mit über 20 Jahren Erfahrung, zählt zu den führenden PV-Modulherstellern weltweit. Sungrow hat sich als Branchenführer im Bereich Wechselrichter etabliert. Gemeinsam bieten sie zuverlässige und leistungsstarke Lösungen für Ihre Solaranlage.</p>
                            </div>
                            <Button className="mt-5 w-full">
                                <Link href="/b2c" className="flex items-center gap-2">
                                    Zum Angebot
                                    <ArrowRight className="pl-2" />
                                </Link>
                            </Button>
                        </div>

                        <div className="border-muted border-2 p-8 rounded-lg flex flex-col justify-between">
                            <div>
                                <Image src="/img/Bild_25.jpg" width={650} height={850} alt="Set 4"></Image>
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-5">Premium Set</h1>
                                <p className="text-muted-foreground mt-2 text-justify">Fronius, als österreichischer Hersteller von Wechselrichtern, und BYD, renommierter Batteriehersteller, bilden ein perfekt aufeinander abgestimmtes System. Tests der Hochschule für Technik und Wirtschaft HTW-Berlin haben ihre Kombination als Testsieger hervorgehoben, was maximale Leistung und Ertrag gewährleistet.</p>
                            </div>
                            <Button className="mt-5 w-full">
                                <Link href="/b2c" className="flex items-center gap-2">
                                    Zum Angebot
                                    <ArrowRight className="pl-2" />
                                </Link>
                            </Button>
                        </div>

                        <div className="border-muted border-2 p-8 rounded-lg flex flex-col justify-between">
                            <div>
                                <Image src="/img/Bild_24.jpg" width={650} height={850} alt="Set 3"></Image>
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-5">High-End Set</h1>
                                <p className="text-muted-foreground mt-2 text-justify">AIKO Module, Gewinner des <span className="font-bold">red<span className="text-red-500">dot</span></span> Design Awards 2023, sind nicht nur die schönsten, sondern auch leistungsstärksten Module auf dem Markt. In Kombination mit den Mikrowechselrichtern von Enphase erzielen sie Spitzenleistungen und maximale Erträge für Ihre Solaranlage.</p>
                            </div>
                            <Button className="mt-5 w-full">
                                <Link href="/b2c" className="flex items-center gap-2">
                                    Zum Angebot
                                    <ArrowRight className="pl-2" />
                                </Link>
                            </Button>
                        </div>

                    </div>
                </section>
            </MaxWidthImageWrapper>

            <MaxWidthWrapper>

                <section className="mt-20 p-10 bg-gray-100 border border-gray-200 rounded-lg">
                    <Badge>Partnerschaften</Badge>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Exzellente Partnerschaften: <br /> Die Auswahl führender Hersteller für erstklassige Photovoltaik-Lösungen</h1>

                    <p className="text-muted-foreground mt-2">Unser Engagement für Exzellenz zeigt sich in jedem Aspekt unserer Arbeit, insbesondere in der
                        Auswahl der Komponenten, die wir verwenden und unseren Kunden verbauen. Wir sind stolz
                        darauf, ausschließlich mit den weltweit renommiertesten Herstellern zusammenzuarbeiten, um
                        sicherzustellen, dass unsere Kunden nur die besten Produkte erhalten.
                        <br />
                        Wir sind davon überzeugt, dass nur die Verwendung der besten Komponenten die langfristige
                        Leistung und Zuverlässigkeit Ihrer Photovoltaik-Anlage gewährleisten kann. Darüber hinaus
                        möchten wir betonen, dass wir nicht an einzelne Hersteller gebunden sind. Unser
                        Kundeninteresse steht stets im Mittelpunkt, daher treffen wir unsere Auswahl aus einem breiten
                        Spektrum an Top-Herstellern, um sicherzustellen, dass Sie die optimale Lösung für Ihre
                        Bedürfnisse erhalten.</p>

                    <Button className="mt-5">
                        <Link href="/" className="flex items-center gap-2">
                            Jetzt Kontakt aufnehmen
                            <ArrowRight className="pl-2" />
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
                    <p className="mt-2 text-muted-foreground max-w-prose">Kein Problem! Kontaktiere uns, und wir werden deine offenen Fragen gerne klären.</p>
                    <Button variant="outline" className="mt-5">
                        <Link href="mailto:info@woltuenergy.com?subject=Fragen" className="flex items-center">
                            Kontakt aufnehmen
                            <ArrowRight className="pl-2" />
                        </Link>
                    </Button>
                </section>
            </MaxWidthWrapper>

        </>
    )
}

export default Page