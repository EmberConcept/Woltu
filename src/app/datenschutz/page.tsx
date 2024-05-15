import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <section className="mt-20">
                <Badge>Rechtliches</Badge>
                <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mt-2">Datenschutzerklärung</h1>
                <Separator className="mt-5" />
            </section>
            
            
        </MaxWidthWrapper>
    )
}

export default Page