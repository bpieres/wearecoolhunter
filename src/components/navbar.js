import { Link, navigate } from "gatsby"
import PropTypes from "prop-types"
import React, { useState } from "react"
import XIcon from "./shared/XIcon"

const HamburguerIcon = ({ setDrawerStatus }) => (
    <button className="has-text-white" onClick={() => setDrawerStatus(true)}>
        <img loading="lazy" src="/menu.png" width="30px" alt="Menú" />
    </button>
)

const NavbarDrawer = ({ siteTitle, drawerStatus, setDrawerStatus, goTo }) => {
    return (
        <div
            className="navbar--drawer"
            style={{
                width: drawerStatus ? "100%" : "0",
                left: drawerStatus ? "0" : "-100%",
            }}
        >
            <button
                className="navbar--drawer__button"
                onClick={() => setDrawerStatus(false)}
            >
                <XIcon color="#B18667" width="25px" />
            </button>

            <button onClick={() => goTo("/")} className="navbar--drawer__title">
                <img src="/logo.png" alt="CoolHunter" />
            </button>

            <div className="navbar--drawer__menu">
                <button onClick={() => goTo("work")} className="navbar-item">
                    <span className="navbar-item--content">Work</span>
                </button>
                <button onClick={() => goTo("network")} className="navbar-item">
                    <span className="navbar-item--content">Network</span>
                </button>
                <button onClick={() => goTo("updates")} className="navbar-item">
                    <span className="navbar-item--content">Update</span>
                </button>
                <button onClick={() => goTo("contact")} className="navbar-item">
                    <span className="navbar-item--content">Contact</span>
                </button>
            </div>
        </div>
    )
}

const Navbar = ({ siteTitle }) => {
    const [drawerStatus, setDrawerStatus] = useState(null)

    const goTo = async id => {
        const route =
            typeof window !== "undefined" ? window.location.pathname : ""
        console.log("location is: ", route)

        if (route !== "/") {
            navigate("/")

            setTimeout(() => {
                document
                    .getElementById(id)
                    .scrollIntoView({ behavior: "smooth" })
            }, 1000)
        } else {
            document.getElementById(id).scrollIntoView({ behavior: "smooth" })
        }

        setDrawerStatus(false)
    }

    return (
        <nav className="navbar is-dark">
            <div className="navbar-brand">
                <span className="navbar-item pl-5">
                    <HamburguerIcon setDrawerStatus={setDrawerStatus} />
                </span>

                <div className="navbar-title-mobile has-text-centered pr-5">
                    <Link
                        to="/"
                        style={{
                            textDecoration: `none`,
                            height: "fit-content",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                        }}
                    >
                        <img
                            loading="lazy"
                            src="/logo.png"
                            height="100%"
                            alt="COOL HUNTER"
                        />
                    </Link>
                </div>
            </div>

            <div className="navbar-title-desktop has-text-centered">
                <Link
                    to="/"
                    style={{
                        textDecoration: `none`,
                        height: "fit-content",
                        display: "flex",
                        alignContent: "center",
                        justifyContent: "center",
                    }}
                >
                    <img
                        loading="lazy"
                        src="/logo.png"
                        height="100%"
                        alt="COOL HUNTER"
                    />
                </Link>
            </div>

            <div className="navbar-menu">
                <div className="navbar-start"></div>
                <div className="navbar-end">
                    <button
                        onClick={() => goTo("work")}
                        className="navbar-item"
                    >
                        <span className="navbar-item--content">Work</span>
                    </button>
                    <button
                        onClick={() => goTo("network")}
                        className="navbar-item"
                    >
                        <span className="navbar-item--content">Network</span>
                    </button>
                    <button
                        onClick={() => goTo("updates")}
                        className="navbar-item"
                    >
                        <span className="navbar-item--content">Update</span>
                    </button>
                    <button
                        onClick={() => goTo("contact")}
                        className="navbar-item"
                    >
                        <span className="navbar-item--content">Contact</span>
                    </button>
                </div>
            </div>

            <NavbarDrawer
                drawerStatus={drawerStatus}
                setDrawerStatus={setDrawerStatus}
                siteTitle={siteTitle}
                goTo={goTo}
            />
        </nav>
    )
}

Navbar.propTypes = {
    siteTitle: PropTypes.string,
}

Navbar.defaultProps = {
    siteTitle: ``,
}

export default Navbar
