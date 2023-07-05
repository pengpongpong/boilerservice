import React from 'react'
import Image from "next/image"
import ownerImage from "public/images/owner.jpeg"


const UeberUnsPage = () => {
    return (
        <>
            <header>
                <h1 className="my-8 text-5xl text-center font-text">Über uns</h1>
            </header>
            <main className="my-8 w-1/2 mx-auto font-text flex gap-4 flex-grow">
                <section className="w-full flex flex-col gap-6">
                    <p>
                        Paulmichl ist Ihr traditioneller Handwerksbetrieb in Graz der mit viel Sorgfalt Ihre Boilerwartung übernimmt. Bei uns erhalten Sie eine umfassende Beratung, hochwertige Arbeit unseres Meisterbetriebes, durchgehende Betreuung und umfangreichen Service - auch nach Umsetzung des Projekts. Wir sind persönlich für Sie da, auch außerhalb der üblichen Öffnungszeiten.
                    </p>
                    <p>
                        Wir garantieren eine einwandfreie Umsetzung aller Arbeiten.

                        Das Vertrauen unserer Kunden macht uns stolz und spornt uns gleichzeitig an, uns immer weiterzuentwickeln. Durch neueste und modernste Technik sowie Weiterbildung unseres erfahrenen Fachpersonals stehen wir Ihnen in allen Fragen und Situationen zur Seite.
                    </p>
                    <p>Machen Sie sich selbst ein Bild und nehmen Sie <a className="underline text-primary" href="/kontakt">Kontakt</a> zu uns auf. Wir freuen uns auf Sie.</p>
                </section>
                <section className="w-full">
                    <figure>
                        <Image src={ownerImage} alt="besitzer" width={400} height={600} />
                        <figcaption className="mt-2">Geschäftsführer Etienne Paulmichl</figcaption>
                    </figure>
                </section>
            </main>
        </>
    )
}

export default UeberUnsPage