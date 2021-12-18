import React from "react"
import LinkedinIcon from "../../shared/LinkedinIcon"

const UpdatesSection = () => {
    return (
        <section className="home__updates has-background-white" id="updates">
            <div className="container px-5 py-5">
                <div className="columns is-centered is-multiline">
                    <div className="column is-12 is-4-widescreen home__updates--title">
                        <h3 className="is-size-3">Updates</h3>
                        <h5 className="is-size-5 mb-0 has-text-primary is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only is-flex-widescreen">
                            Stay UpToDate!
                        </h5>
                    </div>
                    <div className="column is-12 is-8-widescreen home__updates--container">
                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:6725134957234155520/"
                            frameBorder="0"
                            width="100%"
                            height="450px"
                            allowFullScreen=""
                            title="Publicación integrada"
                        ></iframe>

                        <iframe
                            src="https://www.linkedin.com/embed/feed/update/urn:li:activity:6718914054867443712/"
                            frameBorder="0"
                            width="100%"
                            height="450px"
                            allowFullScreen=""
                            title="Publicación integrada"
                        ></iframe>
                    </div>
                </div>
                <div className="columns is-centered is-vcentered is-hidden-widescreen">
                    <h5 className="is-size-5 pt-5 has-text-primary has-text-centered">
                        Stay UpToDate!
                    </h5>
                </div>
            </div>
        </section>
    )
}

export default UpdatesSection
