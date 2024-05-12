import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Steps from "@/components/Steps"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server"
import { ImagePlus } from "lucide-react"
import { notFound } from "next/navigation"
import { useState } from 'react'


const Page = async () => {

    const { getUser } = getKindeServerSession()
    const user = await getUser()

    const ADMIN_EMAIL = process.env.ADMIN_EMAIL

    if (!user || user.email !== ADMIN_EMAIL) {
        return notFound()
    }

    



    return (
        <>
            <MaxWidthWrapper>
                <div className="mt-10 p-5 border-solid border border-gray-200 rounded-lg">
                    <h1 className="font-bold text-xl lg:text-2xl text-primary">Admin Panel</h1>
                    <Separator className="mt-2" />
                    <p className="mt-2 text-muted-foreground">Du befindest dich im Adminpanel, achte darauf, dass deine Aktionen sorgfältig und verantwortungsbewusst durchgeführt werden. Änderungen können sich direkt auf die Funktionalität und Sicherheit der gesamten Plattform auswirken. Bei Unsicherheiten oder Fragen bitte zuerst Rücksprache halten. </p>
                    <p className="mt-2 text-muted-foreground">Nutzername: <span className="font-bold">{ADMIN_EMAIL}</span></p>
                </div>

                <div className="w-full mt-10">

                    <div className="mt-2">
                        <Steps />

                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-5">
                        <div className="w-full h-96 rounded-lg border-solid border border-gray-200 grid grid-cols-2 gap-2 p-2 hover:bg-primary/20 hover:border-primary cursor-pointer ease-in duration-200">
                            <Skeleton className="w-full h-full flex items-center justify-center">
                                <div className="text-muted-foreground"><ImagePlus /></div>
                            </Skeleton>

                            <div>
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-16 w-full mt-2" />

                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <Skeleton className="h-20 w-full" />
                                    <Skeleton className="h-20 w-full" />
                                </div>

                                <Skeleton className="w-full h-40 mt-2" />
                            </div>
                        </div>
                        <div className="w-full h-96 rounded-lg border-solid border border-gray-200 grid grid-cols-2 gap-2 p-2 hover:bg-primary/20 hover:border-primary cursor-pointer ease-in duration-200">
                            <Skeleton className="w-full h-full flex items-center justify-center">
                                <div className="text-muted-foreground"><ImagePlus /></div>
                            </Skeleton>

                            <div>
                                <Skeleton className="h-10 w-full" />
                                <Skeleton className="h-16 w-full mt-2" />

                                <div className="grid grid-cols-2 gap-2 mt-2">
                                    <Skeleton className="h-20 w-full" />
                                    <Skeleton className="h-20 w-full" />
                                </div>

                                <Skeleton className="w-full h-40 mt-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </>
    )
}

export default Page