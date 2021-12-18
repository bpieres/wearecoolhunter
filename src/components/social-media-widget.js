import React from "react"
import LinkedinIcon from "./shared/LinkedinIcon"
import InstagramIcon from "./shared/InstagramIcon"

const SocialMediaWidget = () => {
    // const rrss = [{}]

    // const [redes, setRedes] = useState(rrss)

    return (
        <div className="social-media--widget">
            <a
                href="https://www.linkedin.com/company/coolhunter"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinIcon color="#B18667" width="25px" height="25px" />
            </a>
            <a
                href="https://www.instagram.com/coolhunterar"
                target="_blank"
                rel="noopener noreferrer"
            >
                <InstagramIcon color="#B18667" width="25px" height="25px" />
            </a>
        </div>
    )
}

export default SocialMediaWidget
