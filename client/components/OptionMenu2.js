import React from "react";

export default function OptionMenu1(props) {
    return (
        <div className={props.class}>
            <input type="radio" name={props.iName} 
                value={props.iValue} onChange={props.change}
                checked={props.check}
            />
            <p className="text-bold">{props.pText}</p>
            <img src={props.source} alt={props.alt} />
        </div>
    )
}