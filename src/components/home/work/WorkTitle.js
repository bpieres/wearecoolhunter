import React from "react"
import ArrowDownIcon from "../../shared/ArrowDownIcon"

const WorkTitle = () => {
    return (
        <section className="home__work--title has-text-centered  has-text-white">
            <h2 className="is-size-3 is-size-2-desktop mb-5 pb-2">Work</h2>

            <ArrowDownIcon width="50px" height="50px" color="#cfb385" />

            <p className="pt-5 pb-3 px-5">
                Being explorers is our{" "}
                <b className="has-text-primary">starting point</b> and our
                guiding light. We set and promote innovation and curiosity.
            </p>
            <p className="pt-5 pb-3 px-5">
                We are pioneers in discovering and creating new ways of making{" "}
                <b className="has-text-primary">outstanding</b> business for our
                clients.
            </p>
        </section>
    )
}

export default WorkTitle
