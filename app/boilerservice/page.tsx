import React from 'react'
import { DiscountBanner } from "../page"

type Props = {}

const BoilerservicePage = (props: Props) => {
    return (
        <>
            <header>
                <h1 className="mb-8 mt-12 text-5xl text-center tracking-wide font-text">Boilerservice</h1>
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
                <section className="w-2/3 mx-auto text-left">
                    <h2 className="mb-8 mt-12 text-4xl text-center">Notdienst</h2>
                    <p>
                        Wenn sie ein Problem mit Ihrem Boiler haben brauchen Sie schnelle und qualifizierte Hilfe, um das Problem so schnell wie möglich zu lösen.
                    </p>
                    <p className="my-4 text-left">Unser Notdienst bietet schnelle Hilfe bei:</p>
                    <ul className="mb-4 text-left list-disc">
                        <li className="ml-12">Wasserschäden am Boiler</li>
                        <li className="ml-12">Nicht aufheizen des Boilers</li>
                        <li className="ml-12">Laute Geräusche des Boilers</li>
                        <li className="ml-12">Unerwünschte Gerüche des Boilers (z.B. verbrannter Geruch)</li>
                        <li className="ml-12">Unterfunktion des Boilers</li>
                    </ul>
                    <p>Wir sind in Notfällen zu jeder Zeit für Sie zu erreichen und schnell vor Ort, um Ihre Probleme kompetent und fachmännisch in die Hand zu nehmen.</p>
                    <p className="text-center text-lg">Rufen sie uns an unter: <a className="underline" href="tel:00436641522352<">+43 664 152-23-52</a></p>
                </section>
                <DiscountBanner />
            </main>
        </>

    )
}

export default BoilerservicePage