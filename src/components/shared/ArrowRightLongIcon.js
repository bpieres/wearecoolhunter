import React from "react"

const ArrowRightLongIcon = ({ width, height, customClasses, color }) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="far"
            data-icon="long-arrow-right"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className={`svg-inline--fa fa-long-arrow-right fa-w-14 fa-2x ${customClasses}`}
            width={width}
            height={height}
        >
            <path
                fill={color}
                d="M295.515 115.716l-19.626 19.626c-4.753 4.753-4.675 12.484.173 17.14L356.78 230H12c-6.627 0-12 5.373-12 12v28c0 6.627 5.373 12 12 12h344.78l-80.717 77.518c-4.849 4.656-4.927 12.387-.173 17.14l19.626 19.626c4.686 4.686 12.284 4.686 16.971 0l131.799-131.799c4.686-4.686 4.686-12.284 0-16.971L312.485 115.716c-4.686-4.686-12.284-4.686-16.97 0z"
            ></path>
        </svg>
    )
}

export default ArrowRightLongIcon
