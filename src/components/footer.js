import React from "react"
import { Link } from "gatsby"

import ArrowRightLongIcon from "../components/shared/ArrowRightLongIcon"
import FacebookIcon from "../components/shared/FacebookIcon"
import TwitterIcon from "../components/shared/TwitterIcon"
import LinkedinIcon from "../components/shared/LinkedinIcon"
import InstagramIcon from "../components/shared/InstagramIcon"

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer
            className="footer has-background-dark has-text-light"
            id="contact"
        >
            <div className="container footer__content">
                <div className="footer__content--brand">
                    <Link
                        to="/"
                        style={{
                            textDecoration: `none`,
                            height: "fit-content",
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "start",
                            padding: "5px 0",
                        }}
                    >
                        <img
                            loading="lazy"
                            src="/logo-small.png"
                            height="100%"
                            alt="COOL HUNTER"
                        />
                    </Link>
                </div>

                <div className="footer__content--title">
                    <h2 className="is-size-5 is-size-4-desktop">
                        Find out what <b>these hunters</b> can do for your
                        business.
                    </h2>
                </div>

                <div className="footer__content--email">
                    <a
                        className="is-size-6 is-size-5-desktop"
                        href="mailto:contact@wearecoolhunter.com"
                    >
                       contact@wearecoolhunter.com
                    </a>
                </div>

                <div className="footer__content--address">
                    <p className="bold">Headquarters</p>
                    <p className="bold">BA, Argentina </p>
                    <p className="light">Arroyo 836, 9 D</p>
                    <p className="light">+54 4804 8216</p>
                </div>

                <div className="footer__content--maps">
                    <a
                        href="https://goo.gl/maps/m6SNs1kSJyDHrtKx8"
                        target="_blank"
                    >
                        <h4 className="is-size-5 has-text-white">
                            Google Maps
                        </h4>
                        <ArrowRightLongIcon width="27px" color="#B18667" />
                    </a>
                </div>

                <div className="footer__content--social-media">
                    <a
                        href="http://www.facebook.com/coolhunterar/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FacebookIcon
                            color="#B18667"
                            width="25px"
                            height="25px"
                        />
                    </a>
                    <a
                        href="http://www.twitter.com/CoolHunterAR"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <TwitterIcon
                            color="#B18667"
                            width="25px"
                            height="25px"
                        />
                    </a>
                    <a
                        href="http://www.linkedin.com/company/coolhunter"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <LinkedinIcon
                            color="#B18667"
                            width="25px"
                            height="25px"
                        />
                    </a>
                    <a
                        href="http://www.instagram.com/coolhunterar"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <InstagramIcon
                            color="#B18667"
                            width="25px"
                            height="25px"
                        />
                    </a>
                </div>

                {/* <div className="footer__content--year">
                    <h2 className="is-size-3 is-size-5-desktop">2K</h2>
                    <h2 className="is-size-3 is-size-5-desktop">20</h2>
                </div> */}
            </div>

            <div className="footer__copyright has-background-white">
                <p>Copyright © {currentYear} COOL HUNTER</p>
            </div>
        </footer>
    )
}

export default Footer
