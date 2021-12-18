import React, { useState } from "react"
import XIcon from "../../shared/XIcon"

const GlobalNetworkSection = () => {
    const countries = [
        {
            class: "argentina",
            title: "Argentina",
            items: ["Travel", "Experiences", "Innovation"],
        },
        {
            class: "brazil",
            title: "Brazil",
            items: ["Travel", "Experiences"],
        },
        {
            class: "uruguay",
            title: "Uruguay",
            items: ["Travel", "Experiences"],
        },
        {
            class: "colombia",
            title: "Colombia",
            items: ["Experiences"],
        },
        {
            class: "chile",
            title: "Chile",
            items: ["Travel"],
        },
        {
            class: "peru",
            title: "Peru",
            items: ["Travel", "Experiences"],
        },
        {
            class: "paraguay",
            title: "Paraguay",
            items: ["Travel", "Experiences"],
        },
        {
            class: "ecuador",
            title: "Ecuador",
            items: ["Experiences"],
        },
        {
            class: "mexico",
            title: "Mexico",
            items: ["Travel", "Experiences"],
        },
        {
            class: "usa",
            title: "USA",
            items: ["Experiences"],
        },
        {
            class: "canada",
            title: "Canada",
            items: ["Experiences"],
        },
        {
            class: "india",
            title: "India",
            items: ["Experiences"],
        },
        {
            class: "singapore",
            title: "Singapore",
            items: ["Experiences"],
        },
        {
            class: "spain",
            title: "Spain",
            items: ["Travel"],
        },
        {
            class: "turkish",
            title: "Turkey",
            items: ["Travel"],
        },
        {
            class: "centroamerica",
            title: "Centro América",
            items: ["Travel", "Experiences"],
        },
        {
            class: "south-africa",
            title: "South Africa",
            items: ["Experiences"],
        },
        {
            class: "south-korea",
            title: "South Korea",
            items: ["Experiences"],
        },
        {
            class: "honk-kong",
            title: "Honk Kong",
            items: ["Experiences"],
        },
        {
            class: "japan",
            title: "Japan",
            items: ["Experiences"],
        },
    ]

    const [selectedCountry, setSelectedCountry] = useState(countries[0])

    const selectCountry = country => {
        console.log("selected is: ", country)
        setSelectedCountry(country)
    }
    const selectCountryMobile = e => {
        const countryIndex = e.target.value
        setSelectedCountry(countries[countryIndex])
    }

    return (
        <section className="home__global" id="network">
            <div className="container px-0 py-5">
                <div className="home__global--title has-text-centered">
                    <h3 className="is-size-4 has-text-primary">
                        Global Network
                    </h3>

                    <p>
                        Our <b>adventurous spirit</b> moves us to keep always
                        developing our business network.
                    </p>
                    <p>
                        We have operations in more tan <b>10 countries</b> on
                        different continents.
                    </p>
                </div>

                <div className="columns is-multiline is-centered py-5 my-5">
                    <div className="column is-5-tablet is-3-desktop info-container">
                        <div className="select-mobile">
                            <select
                                name="countries"
                                onChange={selectCountryMobile}
                                id="#countries-select"
                            >
                                {countries.map((country, i) => (
                                    <option value={i}>{country.title}</option>
                                ))}
                            </select>
                        </div>

                        <div className="map-info">
                            <h4 className="is-size-5 has-text-primary mb-5">
                                {selectedCountry.title}
                            </h4>

                            <ul className="map-info--list">
                                {selectedCountry.items.map((item, i) => (
                                    <li key={`selected-item-${i}`}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="column is-12 is-6-desktop has-text-centered">
                        <div className="dynamic-map">
                            <img src="/map.svg" alt="MAPA" />

                            {countries.map((country, i) => (
                                <button
                                    key={i}
                                    className={country.class}
                                    title={country.title}
                                    onClick={() => selectCountry(country)}
                                ></button>
                            ))}
                        </div>
                    </div>
                    <div className="column is-hidden-mobile  is-3"></div>
                </div>

                <div className="home__global--x-icon">
                    <a href="#">
                        <XIcon width="25px" height="25px" color="#0066FF" />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default GlobalNetworkSection
