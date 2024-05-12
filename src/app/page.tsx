import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowRight, Leaf, Mail, MapPin, Phone, Star, Zap } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Willkommen bei <span className="text-primary">Woltu Energie.</span> Ein Ort für grüne Photovoltail-Innovationen.</h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">Besuchen Sie uns und erleben Sie unsere Mission, die darauf abzielt, innovative Lösungen für die Herausforderungen unserer Zeit zu entwickeln.</p>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Link href='/products' className={buttonVariants()}>Jetzt entdecken</Link>
            <Button variant="outline">Termin vereinbaren <ArrowRight className="pl-2" /></Button>
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
          <Image className="rounded-lg" src="/showroom.jpg" width={2264} height={1698} alt="Showroom" />

        </div>
      </MaxWidthWrapper>

      <section className="relative w-full bg-[url('/building.jpg')] bg-cover bg-center pt-32 pb-32 mt-20 -z-20">
        <MaxWidthWrapper>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#000000b0] to-[#0000] -z-10"></div>
          <h1 className="z-50 text-3xl font-bold tracking-tight text-white sm:text-4xl">Eine nachhaltige Zukunft stärken</h1>
          <p className="z-50 mt-3 text-lg max-w-prose text-white">Willkommen auf unserer Website für grüne Energie, die sich der Schaffung einer nachhaltigen Zukunft für alle widmet.</p>
        </MaxWidthWrapper>
      </section>

      <section className="mt-20">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            <div>
              <Badge>Nachhaltigkeit</Badge>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Umweltfreundliche Energielösungen für eine grünere Zukunft</h1>
              <p className="mt-3 text-lg max-w-prose text-muted-foreground">
                Unsere grünen Energieprodukte und -dienstleistungen bieten sowohl Umwelt- als auch wirtschaftliche Vorteile. Durch die Auswahl unserer Lösungen können Sie Ihren CO2-Fußabdruck reduzieren und gleichzeitig Geld bei den Energiekosten sparen.
              </p>
              <Separator className="mt-5" />
              <div className="mt-5 grid grid-cols-1 gap-10 lg:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                    <Leaf className="w-8 h-8 text-primary"></Leaf>
                  </div>
                  <h3 className="text-xl mt-2 font-bold text-gray-900 md:text-2xl">Umweltauswirkungen</h3>
                  <p className="mt-1 text-lg max-w-prose text-muted-foreground">
                    Unsere grünen Energielösungen helfen dabei, Treibhausgasemissionen zu reduzieren</p>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                    <Zap className="w-8 h-8 text-primary"></Zap>
                  </div>
                  <h3 className="text-xl mt-2 font-bold text-gray-900 md:text-2xl">Koteneinspaarung</h3>
                  <p className="mt-1 text-lg max-w-prose text-muted-foreground">
                    Der Wechsel zu grüner Energie kann Ihre Energierechnungen senken.</p>
                </div>
              </div>

              <div className="flex gap-2 mt-10">
                <Link href='/products' className={buttonVariants()}>Jetzt entdecken</Link>
                <Button variant="outline">Termin vereinbaren <ArrowRight className="pl-2" /></Button>
              </div>
            </div>
            <div className="w-full bg-[url('/showroom_2.jpg')] bg-cover bg-center h-auto min-h-96 rounded-lg">

            </div>
          </div>
        </MaxWidthWrapper>
      </section>

      <section className="mt-40">
        <MaxWidthWrapper>
          <div className="mx-auto text-center">
            <Badge>Woltu Energy Live</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Top Bewertungen für unseren Service</h1>
            <div className="w-full flex items-center justify-center">
              <p className="mt-2 text-lg max-w-prose text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe tempore consectetur nihil esse neque magnam culpa vero at laboriosam et.</p>
            </div>

            <Separator className="mt-5" />
          </div>
          <div className="grid grid-cols-1 gap-5 mt-5 sm:grid-cols-2">
            <div className="relative bg-[url('/baustelle_1.jpg')] bg-cover bg-center w-full h-96 rounded-lg flex flex-col justify-end p-5">
              <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-t from-[#000000b0] to-[#0000] rounded-lg z-0"></div>
              <div className="flex justify-between items-end z-10">
                <div>
                  <h3 className="text-md mt-2 font-bold text-white md:text-lg">Baustelle Solingen</h3>
                  <p className="text-sm max-w-prose text-opacity-70 text-white">Auftrag: 23.04.2024</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <p>Anschauen</p>
                  <ArrowRight className="w-5 h-5"></ArrowRight>
                </Button>
              </div>
            </div>
            <div className="relative bg-[url('/baustelle_2.jpg')] bg-cover bg-center w-full h-96 rounded-lg flex flex-col justify-end p-5">
              <div className="absolute w-full top-0 left-0 h-full bg-gradient-to-t from-[#000000b0] to-[#0000] rounded-lg z-0"></div>
              <div className="flex justify-between items-end z-10">
                <div>
                  <h3 className="text-md mt-2 font-bold text-white md:text-lg">Baustelle Bayern</h3>
                  <p className="text-sm max-w-prose text-opacity-70 text-white">Auftrag: 23.04.2024</p>
                </div>
                <Button variant="outline" className="flex items-center gap-2">
                  <p>Anschauen</p>
                  <ArrowRight className="w-5 h-5"></ArrowRight>
                </Button>
              </div>
            </div>

          </div>
        </MaxWidthWrapper>
      </section>

      <section className="mt-20">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Long heading is what sets us <span className="text-primary">apart in this feature</span> section.</h1>
            </div>
            <div>
              <p className="mt-2 text-lg max-w-prose text-muted-foreground">Unser Unternehmen ist darauf spezialisiert, grüne Energielösungen anzubieten, die zu einer nachhaltigeren Zukunft beitragen. Mit unserer innovativen Technologie und unserem Engagement für Energieeffizienz helfen wir Kunden, Geld zu sparen, während sie ihren CO2-Fußabdruck reduzieren.</p>
              <div className="mt-10 grid grid-cols-2 gap-10">
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <p>50%</p>
                  </h1>
                  <p className="mt-2 text-lg max-w-prose text-muted-foreground">
                    Energieeinsparungen durch unsere Lösungen</p>
                </div>
                <div>
                  <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    <p>50%</p>
                  </h1>
                  <p className="mt-2 text-lg max-w-prose text-muted-foreground">
                    Energieeinsparungen durch unsere Lösungen</p>
                </div>
              </div>
            </div>
          </div>

          <video autoPlay loop width={1920} height={1080} className="mt-10 rounded-lg shadow-2xl">
            <source src="/video.mp4" type="video/mp4" />
          </video>
        </MaxWidthWrapper>
      </section>

      <section className="-mt-44 bg-gradient-to-r from-primary to-green-700 w-full pt-56 pb-20">
        <MaxWidthWrapper>
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Unsere Partner</h1>
            <div className="w-full flex items-center justify-center">
              <p className="mt-2 text-lg max-w-prose text-white/75">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe tempore consectetur nihil esse neque magnam culpa vero at laboriosam et.</p>
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

      <section className="mt-20">
        <MaxWidthWrapper>
          <div className="mx-auto text-center">
            <Badge>Woltu Energy Live</Badge>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Erfahrungen und Expertisen</h1>
            <div className="w-full flex items-center justify-center">
              <p className="mt-2 text-lg max-w-prose text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe tempore consectetur nihil esse neque magnam culpa vero at laboriosam et.</p>
            </div>
          </div>

          <div className="md:columns-2 lg:columns-2 gap-6 p-4 sm:p-1 mt-10">
            <div className="flex flex-col space-y-2 break-inside-avoid mt-5">
              <Image className="rounded-lg" src="/baustelle_1.jpg" width={2048} height={2048} alt="Baustelle"></Image>
              <div className="mt-5">
                <h3 className="text-xl mt-2 font-bold text-gray-900 md:text-2xl">Photovoltaik - Dach</h3>
                <p className="text-lg max-w-prose text-muted-foreground">Installation of solar panels for residential and commercial properties</p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge variant="outline">Renewable</Badge>
                  <Badge variant="outline">Energy</Badge>
                  <Badge variant="outline">Sustainability</Badge>
                </div>
                <Button variant="outline" className="mt-5">Projekt Anschauen <ArrowRight className="pl-2"></ArrowRight></Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 break-inside-avoid mt-5">
              <Image className="rounded-lg" src="/baustelle_1.jpg" width={2048} height={2048} alt="Baustelle"></Image>
              <div className="mt-5">
                <h3 className="text-xl mt-2 font-bold text-gray-900 md:text-2xl">Photovoltaik - Dach</h3>
                <p className="text-lg max-w-prose text-muted-foreground">Installation of solar panels for residential and commercial properties</p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge variant="outline">Renewable</Badge>
                  <Badge variant="outline">Energy</Badge>
                  <Badge variant="outline">Sustainability</Badge>
                </div>
                <Button variant="outline" className="mt-5">Projekt Anschauen <ArrowRight className="pl-2"></ArrowRight></Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 break-inside-avoid mt-5">
              <Image className="rounded-lg" src="/baustelle_2.jpg" width={2048} height={2048} alt="Baustelle"></Image>
              <div className="mt-5">
                <h3 className="text-xl mt-2 font-bold text-gray-900 md:text-2xl">Photovoltaik - Dach</h3>
                <p className="text-lg max-w-prose text-muted-foreground">Installation of solar panels for residential and commercial properties</p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge variant="outline">Renewable</Badge>
                  <Badge variant="outline">Energy</Badge>
                  <Badge variant="outline">Sustainability</Badge>
                </div>
                <Button variant="outline" className="mt-5">Projekt Anschauen <ArrowRight className="pl-2"></ArrowRight></Button>
              </div>
            </div>
            <div className="flex flex-col space-y-2 break-inside-avoid mt-5">
              <Image className="rounded-lg" src="/baustelle_2.jpg" width={2048} height={2048} alt="Baustelle"></Image>
              <div className="mt-5">
                <h3 className="text-xl mt-2 font-bold text-gray-900 md:text-2xl">Photovoltaik - Dach</h3>
                <p className="text-lg max-w-prose text-muted-foreground">Installation of solar panels for residential and commercial properties</p>
                <div className="flex items-center gap-2 mt-3">
                  <Badge variant="outline">Renewable</Badge>
                  <Badge variant="outline">Energy</Badge>
                  <Badge variant="outline">Sustainability</Badge>
                </div>
                <Button variant="outline" className="mt-5">Projekt Anschauen <ArrowRight className="pl-2"></ArrowRight></Button>
              </div>
            </div>

          </div>



        </MaxWidthWrapper>
      </section>

      <section className="mt-20">
        <MaxWidthWrapper>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[60%_40%]">
            <div>
              <Badge>Nachhaltigkeit</Badge>
              <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-5">Nehmen Sie Kontakt auf.</h1>
              <p className="mt-2 text-lg max-w-prose text-muted-foreground">Wir würden uns freuen, von Ihnen zu hören. Kontaktieren Sie uns für alle Ihre Bedürfnisse im Bereich grüner Energie.</p>
            </div>
            <div className="flex flex-col gap-5">
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">E-mail</p>
                  <p className="text-muted-foreground">info@woltu-energy.com</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Telefon</p>
                  <p className="text-muted-foreground">+49 0151 257 1275</p>
                </div>
              </div>
              <div className="flex gap-5">
                <div className="w-14 h-14 bg-gray-100 rounded-lg flex justify-center items-center">
                  <MapPin className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-gray-900">Standort</p>
                  <p className="text-muted-foreground">124 Solingen, Hessen - Deutschland</p>
                </div>
              </div>
            </div>
          </div>

          <Image className="mt-10 rounded-lg" src="/firma.JPG" alt="Firma" width={3984} height={2240}></Image>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
