import ContactForm from "@/components/contact-form/ContactForm"
import React from 'react'


const KontaktPage = () => {
    return (
        <>
            <header>
                <h1 className="my-8 text-5xl text-center font-text">Kontakt</h1>
            </header>
            <main className="m-12 w-2/5 mx-auto font-text">
                <address>
                    Paulmichl Boilerservice GmbH <br />
                    Pirchäckerstraße 53 <br />
                    8053 - Graz <br />
                    Telefon: <a href="tel:00436641522352">+43 664 152-23-52</a> <br />
                    E-Mail:  <a href="mailto:paulmichl.gmbh@gmail.com">paulmichl.gmbh@gmail.com</a> <br />
                </address>
                <h2 className="mt-8 mb-4 text-2xl">Öffnungszeiten</h2>
                <p className="mb-8">
                    Montag bis Freitag <br />
                    08:00 - 17:00 Uhr
                </p>

                <ContactForm />
            </main>
        </>
    )
}

export default KontaktPage