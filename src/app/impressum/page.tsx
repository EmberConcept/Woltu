import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="mt-20">
                <Badge>Rechtliches</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-2">Impressum</h1>
                <Separator className="mt-5" />
            </section>

            <section className="mt-10">
                <p className="text-muted-foreground">Impressum gemäß § 5 TMG:</p>
                <p className="text-muted-foreground">Verantwortlich für den Inhalt gemäß § 55 Abs. 2 RStV:</p>
                <div className="mt-5 text-muted-foreground">
                    <p>Woltu Energy GmbH</p>
                    <p>Dellenfeld 25,</p>
                    <p>42653 Solingen</p>
                    <p>Deutschland</p>
                </div>

                <div className="mt-5 text-muted-foreground">
                    <p className="font-semibold">Kontakt:</p>
                    <p>E-Mail: info@woltuenergy.com</p>
                    <p>Telefon: +49 212-2327 8777</p>
                </div>

                <div className="mt-5 text-muted-foreground">
                    <p>Amtsgericht Wuppertal</p>
                    <p>HRB 33869</p>
                    <p>Umsatzsteuer ID: DE363085871</p>
                </div>

                <div className="mt-5 text-muted-foreground">
                    <p className="font-semibold">Geschäftsführer:</p>
                    <p>Jianjun Chen, Fei Tong, Zhong Zhao</p>
                </div>

                <div className="mt-5 text-muted-foreground">
                    <p className="font-semibold">Datenschutzbeauftragter:</p>
                    <p>Herr Peiyu Huang</p>
                    <p>Grevenbroicher Weg 15</p>
                    <p>40547 Düsseldorf</p>
                    <p>Telefon: +49 202 2705046</p>
                    <p>E-Mail: datenschutz@woltu.com</p>
                </div>

                <div className="mt-5 text-muted-foreground">
                    <p className="font-semibold">Administration:</p>
                    <p>Ember Concept GmbH</p>
                </div>
            </section>
        </MaxWidthWrapper>
    )
}

export default Page