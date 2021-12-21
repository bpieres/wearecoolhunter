import React from "react"

const AppSelected = () => (
    <div className="travel__selected app__selected">
        <div className="container">
            <div className="has-text-white app__selected--columns">
                <div className="item--buttons">
                    <a
                        href="https://www.vipexperience.com.ar/"
                        className="visit-website" target={'_blank'}
                    >
                        Visit Website
                    </a>
                </div>
                <div className="info has-text-centered px-0 mx-0">
                    <p className="pb-5">
                        Simplify the airport experience for your client by
                        booking a place to enjoy a top-end travel journey.
                    </p>
                    <p className="pb-5">
                        Manage VIP lounges sorted through our app.
                    </p>
                </div>
            </div>
        </div>
    </div>
)

export default AppSelected
