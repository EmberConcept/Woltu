'use client'
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Leaf, Mail, MapPin, Phone, User, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Reveal } from "@/components/Reveal";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>

        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <Reveal>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Willkommen bei <span className="text-primary">WOLTU Energy.</span> Ein Ort für grüne Photovoltaik-Innovation.</h1>
          </Reveal>
          <Reveal>
            <p className="mt-6 text-lg max-w-prose text-muted-foreground text-center">Besuchen Sie uns und erleben einen Ort, an dem Technologie und Umweltbewusstsein
              Hand in Hand gehen. Schauen Sie vorbei und erleben Sie unsere Mission hautnah.</p>
          </Reveal>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Reveal>
              <Link href='#start' className={buttonVariants()}>Jetzt entdecken</Link>
            </Reveal>
            <Reveal><Button variant="outline"><Link href="/b2c" className="flex items-center gap-2">Termin vereinbaren <ArrowRight className="pl-2" /></Link></Button></Reveal>
          </div>
        </div>

      </MaxWidthWrapper>
      <div>
        <div className="relative isolate">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-1000 transform-gpu overflow-hidden blur-3xl  sm:-top-80">
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#2C8A12] to-[#1cf300] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
          </div>
        </div>
      </div>
      <div>
        <div className="absolute isolate right-0 top-0 w-full h-full -z-10">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 -top-40 -z-1000 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div style={{
              clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"
            }} className="relative left-10 aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-[#2C8A12] to-[#1cf300] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]" />
          </div>
        </div>
      </div>
      <MaxWidthWrapper>
        <div className="w-full h-auto z-1000 relative">
          <Reveal>
            <Image className="rounded-lg" src="/img/Bild_1_2.jpg" width={5924} height={3336} alt="Showroom" />
          </Reveal>

        </div>
      </MaxWidthWrapper>

      <section className="relative w-full bg-[url('/img/Bild_2.JPG')] bg-cover bg-center pt-32 pb-32 mt-20 -z-20" id="start">
        <MaxWidthWrapper>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000b0] to-[#0000] -z-10"></div>

          <Reveal>
            <h1 className="z-50 text-3xl font-bold tracking-tight text-white sm:text-4xl">Eine nachhaltige Zukunft stärken</h1>
          </Reveal>
          <Reveal>
            <p className="z-50 mt-3 text-lg max-w-prose text-white">Willkommen auf unserer Website für grüne Energie, die sich der Schaffung einer nachhaltigen Zukunft für alle widmet.</p>
          </Reveal>

        </MaxWidthWrapper>
      </section>

      <section className="mt-20">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>

              <Reveal>
                <Badge>Nachhaltigkeit</Badge>
              </Reveal>
              <Reveal>
                <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Umweltfreundliche Energielösungen für eine grünere Zukunft</h1>
              </Reveal>
              <Reveal>
                <p className="mt-3 text-lg max-w-prose text-muted-foreground text-justify">
                  Unsere nachhaltigen Energieprodukte und -dienstleistungen bieten sowohl Umwelt- als
                  auch wirtschaftliche Vorteile. Durch die Auswahl unserer Lösungen können Sie Ihren
                  CO2-Fußabdruck reduzieren und gleichzeitig Geld bei den Energiekosten sparen.
                </p>
              </Reveal>

              <Separator className="mt-5" />
              <Reveal>
                <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                      <Leaf className="w-8 h-8 text-primary"></Leaf>
                    </div>
                    <h3 className="text-xl mt-2 font-bold text-gray-900 md:text-2xl">Umweltauswirkungen</h3>
                    <p className="mt-1 text-lg max-w-prose text-muted-foreground text-justify">
                      Unsere Energielösungen helfen dabei, Treibhausgasemissionen zu reduzieren</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                      <Zap className="w-8 h-8 text-primary"></Zap>
                    </div>
                    <h3 className="text-xl mt-2 font-bold text-gray-900 md:text-2xl">Kosteneinsparung</h3>
                    <p className="mt-1 text-lg max-w-prose text-muted-foreground text-justify">
                      Der Wechsel zu grüner Energie kann Ihre Energierechnungen senken.</p>
                  </div>
                </div>
              </Reveal>

              <div className="flex gap-2 mt-10">
                <Reveal>
                  <Link href='/hersteller' className={buttonVariants()}>Jetzt entdecken</Link>
                </Reveal>
                <Reveal><Button variant="outline"><Link href="/b2c" className="flex items-center gap-2">Termin vereinbaren <ArrowRight className="pl-2" /></Link></Button></Reveal>
              </div>
            </div>

            <div className="w-full bg-[url('/img/Bild_3.JPG')] bg-cover bg-center h-auto min-h-96 rounded-lg">
            </div>

          </div>
        </MaxWidthWrapper>
      </section>

      <section className="mt-40">
        <MaxWidthWrapper>
          <div className="mx-auto text-center flex items-center flex-col">
            <Reveal>
              <Badge>Woltu Energy Live</Badge>
            </Reveal>
            <Reveal>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Top Bewertungen für unseren Service</h1>
            </Reveal>
            <div className="w-full flex items-center justify-center">
              <Reveal>
                <p className="mt-2 text-lg max-w-prose text-muted-foreground">Unsere zufriedenen Kunden loben besonders unsere schnelle und zuverlässige Abwicklung.
                  Wir freuen uns, Ihnen stets den bestmöglichen Service bieten zu können.</p>
              </Reveal>
            </div>

            <Separator className="mt-5" />
          </div>
          <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2">
            <Reveal>
              <div className="border-muted rounded-lg border">
                <Image className="rounded-t-lg h-96" src="/img/Bild_18.jpg" width={1600} height={1025} alt="Kundenfoto"></Image>
                <div className="p-5">
                  <div className="flex items-center gap-5">
                    <div className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-100">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="tracking-tighter">
                      <p className="text-muted-foreground">Kunde</p>
                      <p>Marion W. aus Euskirchen</p>
                    </div>
                  </div>
                  <Separator className="mt-5" />
                  <p className="mt-5 text-muted-foreground">Danke, Woltu Energy! Schnelle Installation, tolles Ergebnis. Wir empfehlen
                    euch gerne weiter!</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="border-muted rounded-lg border">
                <Image className="rounded-t-lg h-96" src="/img/Bild_19.jpg" width={1600} height={1025} alt="Kundenfoto"></Image>
                <div className="p-5">
                  <div className="flex items-center gap-5">
                    <div className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-100">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="tracking-tighter">
                      <p className="text-muted-foreground">Kunde</p>
                      <p>Elfriede und Harald N. aus Wuppertal</p>
                    </div>
                  </div>
                  <Separator className="mt-5" />
                  <p className="mt-5 text-muted-foreground">Woltu Energy hat unsere Erwartungen übertroffen! Tolle Arbeit,
                    tolles Ergebnis!</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="border-muted rounded-lg border">
                <Image className="rounded-t-lg h-96" src="/img/Bild_20.jpg" width={1600} height={1025} alt="Kundenfoto"></Image>
                <div className="p-5">
                  <div className="flex items-center gap-5">
                    <div className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-100">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="tracking-tighter">
                      <p className="text-muted-foreground">Kunde</p>
                      <p>Stefan G. aus Pforzheim</p>
                    </div>
                  </div>
                  <Separator className="mt-5" />
                  <p className="mt-5 text-muted-foreground">Top Beratung, professionelle Installation, und unsere Photovoltaikanlage läuft
                    einwandfrei. Danke, Woltu Energy!</p>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="border-muted rounded-lg border">
                <Image className="rounded-t-lg h-96" src="/img/Bild_21.jpg" width={1600} height={1025} alt="Kundenfoto"></Image>
                <div className="p-5">
                  <div className="flex items-center gap-5">
                    <div className="rounded-full flex justify-center items-center w-12 h-12 bg-gray-100">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <div className="tracking-tighter">
                      <p className="text-muted-foreground">Kunde</p>
                      <p>Manu M. aus München</p>
                    </div>
                  </div>
                  <Separator className="mt-5" />
                  <p className="mt-5 text-muted-foreground">Sehr gute Projektierung, Professionelles Team, reibungslose Installation, und unsere
                    neue Photovoltaikanlage läuft perfekt. Sehr zufrieden!</p>
                </div>
              </div>
            </Reveal>

          </div>
        </MaxWidthWrapper>
      </section>

      <section className="mt-20">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <Reveal>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Nachhaltige Energie für Ihr Zuhause: <span className="text-primary">
                  Entdecken
                  Sie die Vorteile
                </span> unserer Photovoltaik-Lösungen!</h1>
              </Reveal>
            </div>
            <div>
              <Reveal>
                <p className="mt-2 text-lg max-w-prose text-muted-foreground text-justify">Entscheiden Sie sich für eine Photovoltaikanlage von Woltu Energy und reduzieren Sie Ihre CO2-
                  Emissionen erheblich. Gleichzeitig senken Sie Ihre Stromkosten deutlich. Investieren Sie in
                  erneuerbare Energien und profitieren Sie von langfristigen Kosteneinsparungen sowie einem

                  nachhaltigeren Lebensstil. Kontaktieren Sie uns noch heute, um mehr über unsere Photovoltaik-
                  Lösungen zu erfahren und ein maßgeschneidertes Angebot zu erhalten!</p>
              </Reveal>
              <div className="mt-10 grid grid-cols-2 gap-10">
                <div>
                  <Reveal>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      <p>bis zu <span className="text-primary">80%</span></p>
                    </h1>
                  </Reveal>
                  <Reveal>
                    <p className="mt-2 text-lg max-w-prose text-muted-foreground">
                      Kostenersparnis</p>
                  </Reveal>
                </div>
                <div>
                  <Reveal>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      <p>bis zu <span className="text-primary">80%</span></p>
                    </h1>
                  </Reveal>
                  <Reveal>
                    <p className="mt-2 text-lg max-w-prose text-muted-foreground">
                      Reduzierung CO2-Emission</p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>
          <Reveal>
            <video autoPlay loop width={1920} height={1080} className="mt-10 rounded-lg shadow-2xl">
              <source src="/img/woltuvideo.mp4" type="video/mp4" />
            </video>
          </Reveal>
        </MaxWidthWrapper>
      </section>

      <section className="-mt-44 bg-gradient-to-r from-primary to-green-700 w-full pt-56 pb-20">
        <MaxWidthWrapper>
          <div className="text-center flex items-center justify-center flex-col">
            <Reveal>
              <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unsere Partner</h1>
            </Reveal>
            <div className="w-full flex items-center justify-center">
              <Reveal>
                <p className="mt-2 text-lg max-w-prose text-white/75">Eine Entdeckungsreise durch unser Unternehmen.</p>
              </Reveal>
            </div>
          </div>
        </MaxWidthWrapper>

      </section>

      <div className="flex overflow-hidden gap-60">
        <div className="flex space-x-16 items-center mt-10 animate-loop-scroll">
          <Image className="w-52 filter grayscale" src="/partners/logo_1.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_2.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_3.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_4.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_5.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_6.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_7.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_8.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale invert" src="/partners/logo_9.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_10.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_11.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_12.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_13.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_14.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_15.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_16.png" width={360} height={240} alt="woltu_parter_logo"></Image>
          <Image className="w-52 filter grayscale" src="/partners/logo_17.png" width={360} height={240} alt="woltu_parter_logo"></Image>
        </div>
      </div>

      <section className="mt-20" id="WoltuLive">
        <MaxWidthWrapper>
          <div className="mx-auto text-center flex items-center justify-center flex-col">
            <Reveal>
              <Badge className="text-xl pl-5 pr-5">Woltu Energy Live</Badge>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
            <Reveal>
              <Image className="rounded-lg" src="/img/Bild_4.jpg" width={2048} height={2048} alt="Baustelle"></Image>
            </Reveal>
            <Reveal>
              <Image className="rounded-lg" src="/img/Bild_5.jpg" width={2048} height={2048} alt="Baustelle"></Image>
            </Reveal>
            <Reveal>
              <Image className="rounded-lg" src="/img/Bild_6.jpg" width={2048} height={2048} alt="Baustelle"></Image>
            </Reveal>
            <Reveal>
              <Image className="rounded-lg" src="/img/Bild_7.jpg" width={2048} height={2048} alt="Baustelle"></Image>
            </Reveal>


          </div>
        </MaxWidthWrapper>
      </section>

      <section className="mt-20">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[60%_40%]">
            <div>
              <Reveal>
                <Badge>Nachhaltigkeit</Badge>
              </Reveal>
              <Reveal>
                <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Nehmen Sie Kontakt auf.</h1>
              </Reveal>
              <Reveal>
                <p className="mt-2 text-lg max-w-prose text-muted-foreground">Wir würden uns freuen, von Ihnen zu hören. Kontaktieren Sie uns für alle Ihre Bedürfnisse im Bereich grüner Energie.</p>
              </Reveal>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <Reveal>
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                    <Mail className="w-8 h-8 text-primary" />
                  </div>
                </Reveal>
                <Reveal>
                  <div>
                    <Reveal>
                      <p className="font-bold text-gray-900">E-mail</p>
                    </Reveal>
                    <Reveal>
                      <p className="text-muted-foreground">info@woltuenergy.com</p>
                    </Reveal>
                  </div>
                </Reveal>
              </div>
              <div className="flex gap-5">
                <Reveal>
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                    <Phone className="w-8 h-8 text-primary" />
                  </div>
                </Reveal>
                <div>
                  <Reveal>
                    <p className="font-bold text-gray-900">Telefon</p>
                  </Reveal>
                  <Reveal>
                    <p className="text-muted-foreground">+49 212 23283497</p>
                  </Reveal>
                </div>
              </div>
              <div className="flex gap-5">
                <Reveal>
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                </Reveal>
                <div>
                  <Reveal>
                    <p className="font-bold text-gray-900">Standort</p>
                  </Reveal>
                  <Reveal>
                    <p className="text-muted-foreground">Dellenfeld 25 I 42653 Solingen</p>
                  </Reveal>
                </div>
              </div>
            </div>
          </div>

          <Reveal>
            <Image className="mt-10 rounded-lg" src="/firma.JPG" alt="Firma" width={3984} height={2240}></Image>
          </Reveal>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
