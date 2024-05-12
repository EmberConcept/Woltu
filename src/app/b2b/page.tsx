import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Badge } from "@/components/ui/badge"

const Page = () => {
    return (
        <MaxWidthWrapper>
            <div className="mt-20 w-full text-center">
                <Badge>B2B</Badge>
                <h1 className="text-2xl font-bold">Woltu B2B Service Programm</h1>
            </div>

            <div className="w-full flex justify-center mt-10"><iframe src="https://logiwatt-ost.de/einsparpotential/" width={1000} height={600}></iframe></div>
        </MaxWidthWrapper>
    )
}

export default Page