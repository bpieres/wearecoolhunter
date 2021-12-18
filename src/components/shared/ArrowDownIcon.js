import React from "react"

const ArrowDownIcon = ({ width, height, customClasses, color }) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fal"
            data-icon="angle-down"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 256 512"
            className={`svg-inline--fa fa-angle-down fa-w-8 fa-3x ${customClasses}`}
            width={width}
            height={height}
        >
            <path
                fill={color}
                d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
            ></path>
        </svg>
    )
}

export default ArrowDownIcon
