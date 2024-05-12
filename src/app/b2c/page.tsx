
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="text-center mt-20">
                <Badge>Kontakt</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-2">Kontaktieren Sie uns gerne. <br /> Wir helfen!</h1>

                <div className="flex justify-center mt-2">
                    <p className="max-w-prose text-muted-foreground">Füllen Sie einfach das Kontaktformular aus und unser Support-Team wird Ihnen binnen 24 Stunden Werktags eine Antwort per E-Mail zukommen lassen! Wir freuen uns auf Ihre Fragen.</p>
                </div>
            </section>

            <section className="mt-20">

                




            </section>
        </MaxWidthWrapper>
    )
}

export default Page