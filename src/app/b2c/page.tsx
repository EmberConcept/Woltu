
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import UserForm from "@/components/UserForm"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="text-center mt-20">
                <Badge>Kontakt</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-2">Kontaktieren Sie uns gerne. <br /> Wir helfen!</h1>

                <div className="flex justify-center mt-2">
                    <p className="max-w-prose text-muted-foreground">Füllen Sie einfach das Kontaktformular aus und unser Support-Team wird Ihnen binnen 24
                        Stunden Werktags eine Antwort per E-Mail zukommen lassen! Wir freuen uns auf Ihre Fragen.</p>
                </div>
            </section>

            <section className="mt-20">

                <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-5">
                    <div className="border-muted border-2 p-8 rounded-lg">
                        <Badge>Kontakt</Badge>
                        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-2">Was benötigen wir von Ihnen?</h1>
                        <p className="text-muted-foreground mt-2">Damit Sie eine auf Sie ausgerichtete erste valide Einschätzung von uns erhalten können, benötigen wir von Ihnen folgende Angaben:</p>

                        <Separator className="mt-5" />

                        <div className="mt-5">
                            <ol>
                                <li className="text-muted-foreground font-semibold">- Den genauen Standort deines Objekts</li>
                                <li className="text-muted-foreground font-semibold">- Bilder von:</li>
                                <li className="ml-10 text-muted-foreground font-normal">- Allen Dachseiten, Dachziegel müssen klar erkennbar sein</li>
                                <li className="ml-10 text-muted-foreground font-normal">- Von den Giebelseiten</li>
                                <li className="ml-10 text-muted-foreground font-normal">- Aufstellungsmöglichkeiten für Gerüst entland der Hauswände</li>
                                <li className="ml-10 text-muted-foreground font-normal">- Dem kompletten Innenraum des Zählerkastens</li>
                                <li className="ml-10 text-muted-foreground font-normal">- Dem Hausanschlusskasten HAK</li>
                                <li className="ml-10 text-muted-foreground font-normal">- Der Erdung</li>
                                <li className="ml-10 text-muted-foreground font-normal">- Möglichem Standort für eine Wallbox</li>

                                <li className="text-muted-foreground font-semibold">- Detailfotos von dem verbauten Dachziegel</li>
                            </ol>

                            <Separator className="mt-5" />
                            <p className="mt-5 text-muted-foreground">Füllen Sie dazu einfach unseren Kontaktbogen aus. Wir rufen Sie gerne an und besprechen Ihre Umsetzungsmöglichkeiten.</p>
                        </div>

                    </div>
                    <UserForm>
                    </UserForm>
                </div>




            </section>
        </MaxWidthWrapper>
    )
}

export default Page