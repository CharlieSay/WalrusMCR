import React from "react"
import PropTypes from "prop-types"
import "./folder.css"

function Folder({ iconLocation, altText, text, externalLink }) {

    return (
        <div className="content">
            <a href={externalLink}>
                <img width={100} height={75} src={iconLocation} alt={altText}></img>
                <div className="content__text">
                    <p>{text}</p>
                </div>
            </a>
        </div>
    )

}

Folder.defaultProps = {
    iconLocation: ``,
    altText: ``,
    text: ``,
    externalLink: ``
}

Folder.propTypes = {
    iconLocation: PropTypes.string.isRequired,
    altText: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    externalLink: PropTypes.string.isRequired,
}



export default Folder;