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
                    <p className="max-w-prose text-muted-foreground">Erleben Sie live alle Komponenten Ihrer Photovoltaikanlage von Top Herstellern. Vom Modul bis zur Wallbox – alles zum Anfassen und Bestaunen. Entdecken Sie die Zukunft der grünen Energie bei uns!</p>
                </div>
            </section>

            <section className="mt-10">
                <Carousel opts={{
                    align: "start",
                    loop: true,
                }}>
                    <CarouselContent>
                        <CarouselItem><Image className="rounded-lg" src="/showroom.jpg" width={2264} height={1698} alt="Showroom_1"></Image></CarouselItem>
                        <CarouselItem><Image className="rounded-lg" src="/showroom_2.jpg" width={2700} height={2025} alt="Showroom_2"></Image></CarouselItem>
                        <CarouselItem><Image className="rounded-lg" src="/showroom_3.jpg" width={2736} height={2052} alt="Showroom_3"></Image></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </section>

            <section className="mt-20 text-center">
                <Badge>Anfassen und Bestaunen</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Erfahre wie unsere Produkte funktionieren.</h1>
                <div className="flex justify-center">
                    <p className="mt-2 text-muted-foreground max-w-prose">In unserer Ausstellung können Sie unsere innovativen Produkte in Aktion sehen. Erhalten Sie eine praktische Erfahrung und erfahren Sie, wie sie Ihnen zugutekommen können.</p>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 mt-10">
                    <div className="w-full p-5 bg-gray-100 rounded-lg border border-gray-200 flex flex-col items-center">
                        <Box className="w-10 h-10 text-primary" />
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-2">Produktvorführungen</h1>
                        <p className="text-muted-foreground mt-1">Unser sachkundiges Personal wird Sie durch interaktive Produktvorführungen führen und dabei deren Merkmale und Funktionalität präsentieren.</p>
                    </div>
                    <div className="w-full p-5 bg-gray-100 rounded-lg border border-gray-200 flex flex-col items-center">
                        <ShieldQuestion className="w-10 h-10 text-primary" />
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-2">Expertenberatung</h1>
                        <p className="text-muted-foreground mt-1">Unser Team von Experten steht Ihnen zur Verfügung, um alle Fragen zu beantworten, die Sie haben könnten, und um personalisierte Empfehlungen basierend auf Ihren Bedürfnissen zu geben.</p>
                    </div>
                    <div className="w-full p-5 bg-gray-100 rounded-lg border border-gray-200 flex flex-col items-center">
                        <BadgeCheck className="w-10 h-10 text-primary" />
                        <h1 className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl mt-2">Beratung & Betreuung</h1>
                        <p className="text-muted-foreground mt-1">Nach Ihrem Besuch in unserer Ausstellung haben Sie alle Informationen, die Sie benötigen, um eine informierte Entscheidung über unsere Produkte zu treffen.</p>
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