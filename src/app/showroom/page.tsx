import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, BadgeCheck, Box, ShieldQuestion } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="text-center mt-20">
                <Badge>Unser Showroom</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-2">Willkommen in unserem 350 qm großen Showroom!</h1>

                <div className="flex justify-center mt-2">
                    <p className="max-w-prose text-muted-foreground">Erleben Sie live alle Komponenten Ihrer Photovoltaikanlage von Top Herstellern.
                        Vom Modul bis zur Wallbox alles zum Anfassen und Bestaunen.
                        Entdecken Sie die Zukunft der grünen Energie bei uns!</p>
                </div>
            </section>

            <section className="mt-10">
                <Carousel opts={{
                    align: "start",
                    loop: true,
                }}>
                    <CarouselContent>
                        <CarouselItem><Image className="rounded-lg" src="/img/Bild_16_slider_1.JPG" width={6000} height={3378} alt="Showroom_1"></Image></CarouselItem>
                        <CarouselItem><Image className="rounded-lg" src="/img/Bild_16_slider_2.JPG" width={4000} height={2250} alt="Showroom_2"></Image></CarouselItem>
                        <CarouselItem><Image className="rounded-lg" src="/img/Bild_16_slider_3.jpg" width={6000} height={3378} alt="Showroom_3"></Image></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </section>

            <section className="mt-20 text-center">
                <Badge>Anfassen und Bestaunen</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Erfahren Sie wie unsere Produkte funktionieren.</h1>
                <div className="flex justify-center">
                    <p className="mt-2 text-muted-foreground max-w-prose">In unserer Ausstellung können Sie unsere innovativen Produkte in Aktion sehen.
                        Erhalten Sie eine praktisches Erlebnnis und erfahren Sie, wie sie Ihnen zugutekommen können.</p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
                    <div className="w-full p-5 bg-gray-100 rounded-lg border border-gray-200 flex flex-col items-center">
                        <Box className="w-10 h-10 text-primary" />
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-2">Produktvorführungen</h1>
                        <p className="text-muted-foreground mt-1 text-justify">Unser sachkundiges Personal wird Sie durch interaktive Produktvorführungen leiten und dabei
                            deren Merkmale und Funktionalität präsentieren.</p>
                    </div>
                    <div className="w-full p-5 bg-gray-100 rounded-lg border border-gray-200 flex flex-col items-center">
                        <ShieldQuestion className="w-10 h-10 text-primary" />
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-2">Expertenberatung</h1>
                        <p className="text-muted-foreground mt-1 text-justify">Unser Team von Experten steht Ihnen zur Verfügung, um alle Fragen zu beantworten, die Sie haben um personalisierte Empfehlungen, basierend auf Ihren Bedürfnissen geben</p>
                    </div>
                    <div className="w-full p-5 bg-gray-100 rounded-lg border border-gray-200 flex flex-col items-center">
                        <BadgeCheck className="w-10 h-10 text-primary" />
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-2">Beratung & Betreuung</h1>
                        <p className="text-muted-foreground mt-1 text-justify">Nach Ihrem Besuch in unserer Ausstellung haben Sie alle Informationen, die Sie benötigen, um
                            eine informierte Entscheidung über unsere Produkte zu treffen.</p>
                    </div>
                </div>

                <div className="flex gap-5 justify-center">
                    <Button className="mt-5" variant="outline">
                        <Link href="/hersteller" className="flex items-center gap-1">
                            Zu unseren Herstellern
                            <ArrowRight className="pl-2" />
                        </Link>
                    </Button>
                    <Button className="mt-5" variant="ghost">
                        <Link href="/" className="flex items-center gap-1">
                            FAQ
                            <ArrowRight className="pl-2" />
                        </Link>
                    </Button>
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