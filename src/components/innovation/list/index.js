import React, { useState } from "react"

import ArrowDownIcon from "../../shared/ArrowDownIcon"
import XIcon from "../../shared/XIcon"
import InnovationLeft from "../../home/work/images/innovation-left"
import InnovationRight from "../../home/work/images/innovation-right"

import InnovationSelected from "./selected"
import logoTrampoline from "../../../../static/trampoline_logo_white.svg"

const InnovationList = () => {
    const [isSelected, setIsSelected] = useState(false)

    const selectItem = isSelected => {
        setTimeout(() => {
            setIsSelected(isSelected)
        }, 1000)

        if (!isSelected) {
            document
                .getElementById("reset-point")
                .scrollIntoView({ behavior: "smooth", block: "start" })
        } else {
            document
                .getElementById("status")
                .scrollIntoView({ behavior: "smooth", block: "start" })
        }
    }

    return (
        <>
            <div className="innovation__list" id="reset-point">
                <div className="innovation__list-item">
                    <h4 className="item--title has-text-white has-text-centered">
                        <img
                            loading="lazy"
                            src={logoTrampoline}
                            alt="Trampoline Network"
                            width="150px"
                        />
                    </h4>
                    <div className="item--square --double">
                        <InnovationLeft />
                        <InnovationRight />
                    </div>
                    <p className="item--description --shorter has-text-centered has-text-white">
                    Intellectual Property Marketplace
                    </p>

                    <div className="item--button">
                        {/* <button onClick={() => selectItem(true)}> */}
                        <button onClick={(e) => {e.preventDefault();
                         window.open('https://trampoline.network', '_blank');
                               }}>
                            View Website                        
                        </button>
                        <ArrowDownIcon
                            width="20px"
                            color="white"
                            customClasses="arrow-right"
                        />
                    </div>
                </div>
            </div>
            <div id="status" className="innovation__status">
                {isSelected ? (
                    <ArrowDownIcon width="20px" color="white" />
                ) : (
                    <XIcon width="20px" color="#cfb385" />
                )}
            </div>

            <div
                id="selected-container"
                style={{
                    transition: "all ease .3s",
                    height: isSelected ? "100%" : 0,
                    minHeight: isSelected ? "500px" : 0,
                    transform: isSelected ? "scale(1)" : "scale(0)",
                    display: "grid",
                    gridAutoRows: "auto",
                    alignContent: "space-between",
                }}
            >
                <InnovationSelected />
                <div className="container pb-5 my-5 has-text-primary">
                    <a
                        className="has-text-primary mb-5 hide--button"
                        onClick={() => selectItem(false)}
                    >
                        <ArrowDownIcon
                            color="#cfb385"
                            width="20px"
                            customClasses="hide--button-arrow"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}

export default InnovationList
