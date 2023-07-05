import React from 'react'

const Footer = () => {
    const year = new Date().getFullYear()

    return (
        <footer className="daisy_footer daisy_footer-center p-10 bg-base-200 text-base-content rounded font-text">
            <div className="flex gap-4">
                <a href="/ueber-uns" className="daisy_link daisy_link-hover text-base">Über uns</a>
                <a href="/kontakt" className="daisy_link daisy_link-hover text-base">Kontakt</a>
                <a href="/datenschutz" className="daisy_link daisy_link-hover text-base">Datenschutz</a>
                <a href="/impressum" className="daisy_link daisy_link-hover text-base">Impressum</a>
            </div>
            <address>
                <span>Fa. Paulmichl - Der Boilerspezialist</span>
                <span>Pirchäckerstraße 53</span>
                <span>8053 - Graz</span>
            </address>
            <div>
                <span>Copyright © {year} - Fa. Paulmichl Boilerservice</span>
            </div>
        </footer>
    )
}

export default Footer