import Image from "next/image"
import logo from "public/logo.png"
import discountLogo from "public/bxs-discount.svg"
import infoLogo from "public/bx-info-circle.svg"
import hero from "public/images/hero.jpg"
import ImageSlider from "@/components/image-slider/ImageSlider"

export const DiscountBanner = () => {
  return (
    <section className="w-auto lg:w-2/3 mt-6 lg:mt-12 mx-auto text-center">
      <header className="flex gap-4 lg:gap-8 justify-center items-center">
        <Image src={discountLogo} alt="discount logo" width={50} height={50} />
        <h2 className="my-8 text-3xl lg:text-4xl tracking-wider font-ubuntu">
          BOILERSERVICE-AKTION 2023
        </h2>
        <Image src={discountLogo} alt="discount logo" width={50} height={50} />
      </header>
      <p className="my-4 text-lg lg:text-2xl">
        Wenn Sie in der Gegend von Leibnitz, Deutschlandsberg, Voitsberg, Südoststeiermark, Graz-Umgebung, oder Graz wohnen, erhalten Sie dieses Jahr mit unserer Aktion einen Bestpreis von € 125,-* für ein komplettes Service inkl. Anfahrt, Arbeit und neuer Dichtung!
      </p>
      <p className="my-8 text-2xl lg:text-3xl">Jetzt <a className="underline text-primary" href="/kontakt">Kontakt</a> aufnehmen!</p>

      <p className="mb-2 text-xs lg:text-sm underline">*Exklusive MwSt.</p>
      <p className="mb-2 text-xs lg:text-sm">
        <Image className="inline mr-1 lg:mr-2" src={infoLogo} alt="discount logo" width={20} height={20} />
        Die Aktion ist nur für Boiler bis 150L gültig. Gültig bis 30.06.2023.
      </p>
      <p className="mb-2 text-xs lg:text-sm">
        <Image className="inline mr-1 lg:mr-2" src={infoLogo} alt="discount logo" width={20} height={20} />
        Für Preisinformationen außerhalb unserer Aktion bitten wir um <a className="underline text-primary" href="">Kontaktaufnahme</a>.
      </p>
    </section>
  )
}


const Home = () => {

  const images = [
    {
      url: "/images/boiler1.jpeg"
    },
    {
      url: "/images/boiler2.jpeg"
    },
    {
      url: "/images/boiler3.jpeg"
    },
    {
      url: "/images/boiler4.jpeg"
    },
    {
      url: "/images/boiler5.jpeg"
    },
    {
      url: "/images/boiler6.jpeg"
    },
  ]


  return (
    <>
      <header className="min-h-[85vh] lg:mt-0 mb-4 flex flex-col justify-center items-center bg-hero-image bg-cover bg-no-repeat">
        {/* <Image src={logo} alt="logo" width={450} height={250} /> */}
        <h1 className="mt-12 w-auto lg:w-screen pt-6 pb-6 text-shadow text-3xl lg:text-4xl text-black bg-white text-center tracking-wide whitespace-pre-line lg:whitespace-pre font-ubuntu">{`WILLKOMMEN BEI DER FIRMA PAULMICHL\n IHR VERTRAUTER PARTNER RUND UM DEN BOILER`}</h1>
      </header>
      <main className="m-8 lg:m-12 flex-grow font-text">
        <section className="lg:w-3/4 lg:mx-auto text-center lg:text-xl leading-7 lg:leading-9">
          <p>Unsere Firma ist seit 50 Jahren spezalisiert auf Boiler bzw. auf Boilerservice,  rufen Sie uns zur Früherkennung von Schäden, vermeiden Sie hohe Betriebs- und Reparaturkosten und erhöhen Sie die Sicherheit in Ihrem Zuhause.</p>
          <p>Erfahren Sie bei uns, wie Sie Kosten sparen und zugleich die Umwelt schonen können, und dabei mit freundlicher und kompetenter Beratung zu jeder Zeit rechnen können. Lesen Sie mehr zu unseren Dienstleistungen und wie wir Ihnen behilflich sein können.</p>
        </section>
        <DiscountBanner />
        {/* change to window innerwidth? */}
        <section className="my-12 hidden lg:block">
          <ImageSlider images={images} slidesPerView={3} />
        </section>
        <section className="my-12 lg:hidden">
          <ImageSlider images={images} slidesPerView={1} />
        </section>
      </main>
    </>

  )
}

export default Home
