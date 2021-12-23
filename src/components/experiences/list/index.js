import React, { useState } from "react"
import ArrowDownIcon from "../../shared/ArrowDownIcon"
import Gastronomy from "./images/gastronomy"
import Fashion from "./images/fashion"
import LifeStyle from "./images/lifestyle"
import XIcon from "../../shared/XIcon"
import GastronomySelected from "./gastronomy-selected"
import FashionSelected from "./fashion-selected"
import LifestyleSelected from "./lifestyle-selected"

const ShowComponent = ({ selectedItem }) => {
    switch (selectedItem) {
        case "gastronomy":
            return <GastronomySelected />
        case "fashion":
            return <FashionSelected />
        case "lifestyle":
            return <LifestyleSelected />

        default:
            return null
    }
}

const ExperiencesList = () => {
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
            <div className="experiences__list" id="reset-point">
                <div className="experiences__list-item">
                    <h4 className="item--title has-text-white has-text-centered">
                        Gastronomy
                    </h4>
                    <div className="item--square">
                        <Gastronomy />
                    </div>
                    <p className="item--description has-text-centered has-text-white">
                        Connect with the best chefs in the world to create
                        unique gastronomic experiences.
                    </p>

                    <div className="item--button">
                        <button
                            onClick={() =>
                                selectItem({
                                    isSelected: true,
                                    selectedItem: "gastronomy",
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

                <div className="experiences__list-item">
                    <h4 className="item--title has-text-white has-text-centered">
                        Fashion
                    </h4>
                    <div className="item--square">
                        <Fashion />
                    </div>
                    <p className="item--description has-text-centered has-text-white">
                        Offer access to the most renowned fashion community in
                        the world.
                    </p>

                    <div className="item--button">
                        <button
                            onClick={() =>
                                selectItem({
                                    isSelected: true,
                                    selectedItem: "fashion",
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

                <div className="experiences__list-item">
                    <h4 className="item--title has-text-white has-text-centered">
                        Lifestyle
                    </h4>
                    <div className="item--square">
                        <LifeStyle />
                    </div>
                    <p className="item--description has-text-centered has-text-white">
                        Bring your business into the newest trends and engage
                        with your customer.
                    </p>

                    <div className="item--button">
                        <button
                            onClick={() =>
                                selectItem({
                                    isSelected: true,
                                    selectedItem: "lifestyle",
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

            <div className="experiences__status" id="status">
                {isSelected ? (
                    <ArrowDownIcon width="20px" color="white" />
                ) : (
                    <XIcon width="20px" color="#B18667" />
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
                            color="#B18667"
                            width="20px"
                            customClasses="hide--button-arrow"
                        />
                    </a>
                </div>
            </div>
        </>
    )
}

export default ExperiencesList
