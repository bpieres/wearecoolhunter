import React from "react"

const FacebookIcon = ({ width, height, customClasses, color }) => {
    return (
        <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="facebook-square"
            className={`svg-inline--fa fa-facebook-square fa-w-14 ${customClasses}`}
            width={width}
            height={height}
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
        >
            <path
                fill={color}
                d="M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z"
            ></path>
        </svg>
    )
}

export default FacebookIcon