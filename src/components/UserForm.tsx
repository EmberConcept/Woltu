'use client'

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuLabel,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

const formSchema = z.object({
    name: z.string().min(5, {
        message: "Username must be at least 5 characters"
    }),
    email: z
        .string()
        .min(5, {
            message: "Die E-Mail Adresse muss mindestens uas 5 Ziffern bestehen.",
        })
        .email("Die E-Mail Adresse ist nicht vollständig."),
    location: z.string().min(5, {
        message: "Der Straßenname muss mindestens aus 5 Ziffern bestehen."
    }),
    village: z.string().min(5, {
        message: "Die Eingabe muss mindestens aus 5 Ziffern bestehen."
    }),
    region: z.string().min(5, {
        message: "Die Eingabe muss mindestens aus 5 Ziffern bestehen."
    }),
    postal: z.string().min(5, {
        message: "Die Eingabe muss mindestens aus 5 Ziffern bestehen."
    }),
    phone: z.string().min(5, {
        message: "Die Eingabe muss mindestens aus 5 Ziffern bestehen."
    }),
    topic: z.string().min(5, {
        message: "Die Eingabe muss mindestens aus 5 Ziffern bestehen."
    })

})

export function UserForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        console.log(values)
    }

    const [position, setPosition] = React.useState("bottom")

    return (
        <Form {...form}>
            <form className="space-y-4 border-muted border-2 p-8 rounded-lg" onSubmit={form.handleSubmit(onSubmit)}>
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Personalien</FormLabel>
                            <FormControl>
                                <Input placeholder="Vorname" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>E-mail</FormLabel>
                            <FormControl>
                                <Input placeholder="E-Mail" {...field} />
                            </FormControl>
                            <FormDescription>
                                Über diese E-Mail werden wir Sie kontaktieren.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className="grid grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="location"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Straße</FormLabel>
                                <FormControl>
                                    <Input placeholder="Straße" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="village"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Ort</FormLabel>
                                <FormControl>
                                    <Input placeholder="Ort" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <div className="grid grid-cols-2 gap-5">
                    <FormField
                        control={form.control}
                        name="region"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Region</FormLabel>
                                <FormControl>
                                    <Input placeholder="Region" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline">Bundesland auswählen</Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Deutschland</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
                                <DropdownMenuRadioItem value="top">Baden-Württemberg</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="bottom">Bayern</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Berlin</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Brandenburg</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Bremen</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Hamburg</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Hessen</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Mecklemburg-Vorpommern</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Niedersachsen</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Nordrhein-Westfalen</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Rheinland-Pfalz</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Saarland</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Sachsen-Anhalt</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Sachsen</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Schleswig-Holstein</DropdownMenuRadioItem>
                                <DropdownMenuRadioItem value="right">Thüringen</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                        </DropdownMenuContent>
                    </DropdownMenu> */}


                    <FormField
                        control={form.control}
                        name="postal"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Postleitzahl</FormLabel>
                                <FormControl>
                                    <Input placeholder="Postleitzahl" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Telefonnummer</FormLabel>
                            <FormControl>
                                <Input placeholder="Telefonnummer" type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="topic"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Betreff</FormLabel>
                            <FormControl>
                                <Input placeholder="Betreff" {...field} />
                            </FormControl>
                            <FormDescription>
                                Der Betreff ist entscheidend für unser Support Team.
                            </FormDescription>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                <div className="grid w-full gap-5">
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea placeholder="Schreiben Sie Ihre Nachricht hier.." id="message" />
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="picture">Datein hochladen</Label>
                    <Input id="picture" type="file" />
                </div>
                <Button type="submit">Absenden <ArrowRight className="pl-2" /></Button>
            </form>
        </Form>
    )
}

export default UserForm
