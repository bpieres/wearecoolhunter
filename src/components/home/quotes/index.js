import React from "react"
import { Carousel } from "react-responsive-carousel"

const QuotesCarousel = () => {
    const quotes = [
        "We are humans",
        "We are explorers",
        "We are hunters",
        "We are more hunters than anyone",
    ]

    return (
        <Carousel
            showArrows={true}
            emulateTouch={true}
            useKeyboardArrows={true}
            showIndicators={false}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
        >
            {quotes.map((quote, i) => (
                <div
                    key={i}
                    className="quote-slide has-text-info has-text-centered"
                >
                    <h4 className="is-size-3">{quote}</h4>
                </div>
            ))}
        </Carousel>
    )
}

export default QuotesCarousel
