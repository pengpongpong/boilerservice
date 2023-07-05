import Image from "next/image"
import logo from "public/logo.png"
import discountLogo from "public/bxs-discount.svg"
import ImageSlider from "@/components/image-slider/ImageSlider"

const Home = () => {

  return (
    <main className="m-12 flex-grow font-text">
      <header className="flex flex-col justify-center items-center">
        <Image src={logo} alt="logo" width={450} height={250} />
        <h1 className="my-12 w-3/4 text-5xl text-center tracking-wide">WILLKOMMEN BEI DER FIRMA PAULMICHL, IHR VERTRAUTER PARTNER RUND UM DEN BOILER</h1>
      </header>
      <section className="w-3/4 my-4 mx-auto text-center text-xl leading-9">
        <p>Unsere Firma ist seit 50 Jahren spezalisiert auf Boiler bzw. auf Boilerservice,  rufen Sie uns zur Früherkennung von Schäden, vermeiden Sie hohe Betriebs- und Reparaturkosten und erhöhen Sie die Sicherheit in Ihrem Zuhause.</p>
        <p>Erfahren Sie bei uns, wie Sie Kosten sparen und zugleich die Umwelt schonen können, und dabei mit freundlicher und kompetenter Beratung zu jeder Zeit rechnen können. Lesen Sie mehr zu unseren Dienstleistungen und wie wir Ihnen behilflich sein können.</p>
      </section>
      <section className="w-2/3 mt-20 mx-auto text-center">
        <header className="flex gap-8 justify-center items-center">
          <Image src={discountLogo} alt="discount logo" width={50} height={50} />
          <h2 className="my-8 text-4xl tracking-wider">
            BOILERSERVICE-AKTION 2023
          </h2>
          <Image src={discountLogo} alt="discount logo" width={50} height={50} />
        </header>
        <p className="my-4 text-2xl">
          Wenn Sie in der Gegend von Leibnitz, Deutschlandsberg, Voitsberg, Südoststeiermark, Graz-Umgebung, oder Graz wohnen, erhalten Sie dieses Jahr mit unserer Aktion einen Bestpreis von € 125,- für ein komplettes Service inkl. Anfahrt, Arbeit und neuer Dichtung!
        </p>
        <p className="my-8 text-3xl">Jetzt <a className="underline text-primary" href="/kontakt">Kontakt</a> aufnehmen!</p>

        <p className="mb-2 text-sm underline">*** Die Aktion ist nur für Boiler bis 150L gültig ***</p>
        <p className="mb-2 text-sm underline">**Gültig bis 30.06.2023**</p>
        <p className="mb-2 text-sm underline">*Exklusive MwSt.</p>
        <p className="mb-2 text-sm">*Für Preisinformationen außerhalb unserer Aktion bitten wir um <a className="underline text-primary" href="">Kontaktaufnahme</a>*</p>
      </section>

      <section className="my-12">
        <ImageSlider />
      </section>
    </main>
  )
}

export default Home
