import React, { useState } from "react"
import Markets from "./images/markets"
import ArrowDownIcon from "../../shared/ArrowDownIcon"
import Experiences from "./images/experiences"
import Services1 from "./images/services-1"
import Services2 from "./images/services-2"
import AppSelected from "./app-selected"
import MarketsSelected from "./markets-selected"
import ServicesSelected from "./services-selected"
import XIcon from "../../shared/XIcon"

const ShowComponent = ({ selectedItem }) => {
    switch (selectedItem) {
        case "app":
            return <AppSelected />
        case "markets":
            return <MarketsSelected />
        case "services":
            return <ServicesSelected />

        default:
            return null
    }
}

const TravelList = () => {
    const [isSelected, setIsSelected] = useState(false)
    const [selectedItem, setSelectedItem] = useState(null)

    const selectItem = ({ isSelected, selectedItem }) => {
        setTimeout(() => {
            setIsSelected(isSelected)
            setSelectedItem(selectedItem)
        }, 500)

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
            <div className="travel__list" id="reset-point">
                <div className="travel__list-item">
                    <h4 className="item--title has-text-white has-text-centered">
                        New Markets
                    </h4>
                    <div className="item--square">
                        <Markets />
                    </div>
                    <p className="item--description --shorter has-text-centered has-text-white">
                        Expand your bussiness to new places.
                    </p>

                    <div className="item--button">
                        <button
                            onClick={() =>
                                selectItem({
                                    isSelected: true,
                                    selectedItem: "markets",
                                })
                            }
                        >
                            View Work
                        </button>
                        <ArrowDownIcon
                            width="20px"
                            color="white"
                            customClasses="arrow-right"
                        />
                    </div>
                </div>

                <div className="travel__list-item">
                    <h4 className="item--title has-text-white has-text-centered">
                        VIP Experiences App
                    </h4>
                    <div className="item--square">
                        <Experiences />
                    </div>
                    <p className="item--description has-text-centered has-text-white">
                        Find an airport lounge in Argentina and reserve a spot
                        for your client.
                    </p>

                    <div className="item--button">
                        <button
                            onClick={() =>
                                selectItem({
                                    isSelected: true,
                                    selectedItem: "app",
                                })
                            }
                        >
                            View Work
                        </button>
                        <ArrowDownIcon
                            width="20px"
                            color="white"
                            customClasses="arrow-right"
                        />
                    </div>
                </div>

                <div className="travel__list-item">
                    <h4 className="item--title has-text-white has-text-centered">
                        VIP Services
                    </h4>
                    <div className="item--square --double">
                        <Services1 />
                        <Services2 />
                    </div>
                    <p className="item--description has-text-centered has-text-white">
                        Lounges you can already offer to your clients around the
                        world.
                    </p>

                    <div className="item--button">
                        <button
                            onClick={() =>
                                selectItem({
                                    isSelected: true,
                                    selectedItem: "services",
                                })
                            }
                        >
                            View Work
                        </button>
                        <ArrowDownIcon
                            width="20px"
                            color="white"
                            customClasses="arrow-right"
                        />
                    </div>
                </div>
            </div>

            <div className="travel__status" id="status">
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
                    minHeight: isSelected ? "200px" : 0,
                    transform: isSelected ? "scale(1)" : "scale(0)",
                    display: "grid",
                    gridAutoRows: "auto",
                    alignContent: "space-between",
                }}
            >
                <ShowComponent selectedItem={selectedItem} />

                <div className="container pb-5 my-5 has-text-primary">
                    <a
                        className="has-text-primary mb-5 hide--button"
                        onClick={() =>
                            selectItem({
                                isSelected: false,
                                selectedItem: null,
                            })
                        }
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

export default TravelList
