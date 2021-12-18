import React, { useState, useEffect } from "react"

// * components
import XIcon from "../../shared/XIcon"

// * images (gatsby plugin)
import Cuadernos from "./images/cuadernos"
import Mobile from "./images/mobile"
import Passport from "./images/passport"
import Tablet from "./images/tablet"

const MobileHeader = () => {
    const [headerHeight, setHeaderHeight] = useState(null)

    useEffect(() => {
        const headerElement = document.getElementById("header-images")
        let headerElementHeight = headerElement.offsetHeight
        setHeaderHeight(headerElementHeight)

        window.addEventListener("resize", () => {
            if (headerElement) {
                // * re asignando cada vez que se hace resize
                headerElementHeight = headerElement.offsetHeight

                setHeaderHeight(headerElementHeight)
            }
        })

        return () => {
            window.removeEventListener("resize", () => {
                console.info("resize height event listener removed")
            })
        }
    })

    return (
        <div
            className="home__header has-background-dark has-text-light"
            style={{ minHeight: headerHeight + 300 }}
        >
            <div className="golden-borders" id="header-images">
                <div className="container home__header--inner">
                    <div className="columns is-multiline px-0 is-centered is-mobile">
                        <div className="column is-7">
                            <Cuadernos />
                        </div>
                        <div className="column is-5">
                            <Mobile />
                        </div>
                        <div className="column is-full px-0">
                            <h1 className="is-size-3 is-size-2-desktop has-text-primary home__header--title">
                                Exploring new ways of doing business.
                            </h1>
                        </div>
                        <div className="column is-5">
                            <Passport />
                        </div>
                        <div className="column is-5">
                            <Tablet />
                        </div>
                    </div>
                </div>
            </div>

            <XIcon
                width="35px"
                height="35px"
                color="white"
                customClasses="home__x-icon"
            />
        </div>
    )
}

export default MobileHeader
