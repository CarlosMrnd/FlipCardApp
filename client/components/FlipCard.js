import React from "react";

export default function FlipCard(props) {
    return (
        <div className={`flipCard ${props.class} flipCard-${props.id}`}>
            <div id={`div${props.id}`}
                className="flipCard-inner"
                onClick={props.clickCard}
            >
                <div className="flipCard-front">
                </div>
                <div className="flipCard-back flex-style">
                    <img src={props.source} className={props.imgClass} />
                </div>
            </div>
        </div>
    )
}