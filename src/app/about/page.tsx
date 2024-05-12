import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { ArrowRight, Ghost, Mail } from "lucide-react"
import Image from "next/image"


const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="text-center mt-20">
                <Badge>Unser Team</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-5">Wir sind Woltu Energy.</h1>

                <div className="mt-10">
                    <Image className="rounded-lg" src="/firma.JPG" width={3984} height={2240} alt="Firma"></Image>
                </div>
            </section>

            <section className="mt-10">
                <Badge>Wie alles begann</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Unsere Unternehmensgeschichte</h1>
                <p className="mt-2 text-muted-foreground">Unsere Reise begann im Jahr 2023, als wir, ein junges Unternehmen in der aufstrebenden
                    Photovoltaikbranche, unseren Weg in die Welt des nachhaltigen Energieumbruchs
                    wagten. Doch unsere Jugendlichkeit täuscht nicht über unsere tief verwurzelte Kompetenz
                    hinweg. Jeder unserer Mitarbeiter bringt eine Fülle an Erfahrungen mit, die sie über Jahre in
                    der Branche gesammelt haben. Bei der Woltu Energy GmbH finden sie endlich, was sie in ihren vorherigen Unternehmen
                    vermisst haben. Unsere Stärke liegt nicht nur in unserem Wissen, sondern auch in
                    unserem umfassenden Netzwerk. Wir haben Zugang zu den führenden Herstellern von
                    Komponenten und sind Experten im Bereich B2C und B2B. Egal ob Photovoltaikanlagen für
                    Ihr Einfamilienhaus, gewerbliche Aufdachanlagen größer 100 kWp, wahlweise mit USVAnalgen oder Freilandanlagen größer 1 MW, wir liefern stets höchste Qualität und
                    Zuverlässigkeit.
                    Was uns einzigartig macht, ist nicht nur unser Fachwissen, sondern auch unser
                    Engagement für Exzellenz in allen Bereichen und unsere eigenen Montageteams
                    garantieren höchste handwerkliche Leistung bei der Installation. Das beeindruckende
                    Firmengelände der Woltu Engery GmbH in Solingen, mit über 45.000 Quadratmetern
                    Lagerfläche und einem 250 Quadratmeter großen Showroom bietet Interessenten die
                    Möglichkeit, unsere Komponenten live zu erleben und sich vor Ort beraten zu lassen.
                    Unsere Geschichte ist geprägt von Leidenschaft, Innovation und dem festen Glauben an
                    eine nachhaltige Zukunft. Bei der Woltu Energy GmbH setzen wir uns jeden Tag dafür ein,
                    die Welt ein Stückchen grüner zu machen und unseren Kunden, keinen Standard, sondern
                    die bestmögliche Lösung zu bieten.</p>
            </section>

            <section className="mt-20">
                <Badge>Nachhaltigkeit</Badge>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Lerne unser Team kennen.</h1>
                <p className="mt-2 text-muted-foreground max-w-prose">Machen Sie sich mit dem engagierten Team von Woltu Energy vertraut, das sich leidenschaftlich für erneuerbare Energien und eine nachhaltige Zukunft einsetzt.</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
                    <div className="flex flex-col gap-2">
                        <Image className="w-20 h-20 rounded-lg" src="/team/team_1.jpg" width={300} height={300} alt="Team"></Image>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p>CEO</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">John ist leidenschaftlich für erneuerbare Energien und führt unser Unternehmen</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="outline">
                                <Mail className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image className="w-20 h-20 rounded-lg" src="/team/team_2.jpg" width={300} height={300} alt="Team"></Image>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p>CEO</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">John ist leidenschaftlich für erneuerbare Energien und führt unser Unternehmen</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="outline">
                                <Mail className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image className="w-20 h-20 rounded-lg" src="/team/team_3.jpg" width={300} height={300} alt="Team"></Image>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p>CEO</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">John ist leidenschaftlich für erneuerbare Energien und führt unser Unternehmen</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="outline">
                                <Mail className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image className="w-20 h-20 rounded-lg" src="/team/team_4.jpg" width={300} height={300} alt="Team"></Image>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p>CEO</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">John ist leidenschaftlich für erneuerbare Energien und führt unser Unternehmen</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="outline">
                                <Mail className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image className="w-20 h-20 rounded-lg" src="/team/team_5.jpg" width={300} height={300} alt="Team"></Image>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p>CEO</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">John ist leidenschaftlich für erneuerbare Energien und führt unser Unternehmen</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="outline">
                                <Mail className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image className="w-20 h-20 rounded-lg" src="/team/team_6.jpg" width={300} height={300} alt="Team"></Image>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p>CEO</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">John ist leidenschaftlich für erneuerbare Energien und führt unser Unternehmen</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="outline">
                                <Mail className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Image className="w-20 h-20 rounded-lg" src="/team/team_7.jpg" width={300} height={300} alt="Team"></Image>
                        <div>
                            <p className="font-semibold">John Doe</p>
                            <p>CEO</p>
                        </div>
                        <div>
                            <p className="text-muted-foreground">John ist leidenschaftlich für erneuerbare Energien und führt unser Unternehmen</p>
                        </div>
                        <div className="flex items-center gap-5">
                            <Button variant="outline">
                                <Mail className="w-5 h-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="mt-14">
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Wir suchen dich!</h1>
                <p className="mt-2 text-muted-foreground max-w-prose">Wir suchen nach motivierten Mitarbeitern, die sich mit unserer Unternehmensphilosophie identifizieren und aktiv dazu beitragen möchten.</p>
                <Button variant="outline" className="mt-5">
                    Jetzt Karriere machen
                    <ArrowRight className="pl-2" />
                </Button>
            </section>

            <Separator className="mt-5" />

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