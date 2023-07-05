import React from 'react'
import { DiscountBanner } from "../page"

type Props = {}

const BoilerservicePage = (props: Props) => {
    return (
        <>
            <header>
                <h1 className="my-8 text-5xl text-center tracking-wide">Boilerservice</h1>
            </header>
            <main className="m-12 font-text text-center flex-grow">
                <section className="w-2/3 mx-auto flex flex-col gap-4">
                    <p>
                        Da wir uns auf Boilerservice spezialisiert haben, bieten wir jedes Jahr Aktionen für ein Service an.
                    </p>
                    <p>
                        Um es Ihnen als Kunden der Firma Paulmichl zu erleichtern bieten wir Ihnen Pauschalangebote an, diese sind inkl. Anfahrt, Arbeit, neuer Dichtung und MwSt. Das heißt für Sie das bei einem kompletten Service keine extra Kosten anfallen. (Reparaturen sind ausgeschlossen)
                    </p>
                    <p>
                        Natürlich werden auch im Zuge eines Service sämtliche weitere Bauteile Ihres Boilers überprüft wie z.b. das Überdruckventil um auch für Ihre Sicherheit zu sorgen.
                    </p>
                    <p>
                        Bei bereits aufgetretenen Problemen mit Ihrem Boiler bitten wir um Bekanntgabe dieser, um gegebenenfalls den Fehler vor Ort gleich beheben zu können.
                    </p>
                </section>
                <DiscountBanner />
            </main>
        </>

    )
}

export default BoilerservicePage