import { useEffect, useState } from "react"

const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState(null)

    useEffect(() => {
        setWindowSize(window.innerWidth)

        window.addEventListener("resize", () => {
            setWindowSize(window.innerWidth)
        })

        return () => {
            window.removeEventListener("resize", () => {
                console.info("resize hook event listener removed")
            })
        }
    }, [])

    return {
        windowSize,
    }
}

export default useWindowSize
