import React from "react"
import ArrowDownIcon from "../../shared/ArrowDownIcon"

const ExperiencesDescription = () => {
    return (
        <div className="experiences__description">
            <h2 className="is-size-3 is-size-2-desktop py-3 has-text-white has-text-centered">
                Elevate your business to the next level providing best-in-class{" "}
                <b>experiences</b>.
            </h2>

            <ArrowDownIcon
                width="35px"
                height="35px"
                color="#B18667"
                customClasses="experiences__description--arrow"
            />
        </div>
    )
}

export default ExperiencesDescription
