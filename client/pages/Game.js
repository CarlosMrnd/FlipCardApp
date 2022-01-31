import React, { useState } from "react";
import HeaderText from "../components/HeaderText";
import bgGame from "../utils/backgroundGame";
import { cardsArray } from "../utils/flipCards";
import generateLayout from "../utils/layoutConfig";

export default function GamePage(props) {

    const [count, setCount] = useState(0);
    
    const topic = props.topic;
    const level = props.level; 
    
    let time = 10;

    generateLayout(level, topic);

    return (
        <section id="game-sct" className="flex-style">
            <div
                id="game-bg"
                style={{ backgroundImage: `url("${bgGame(topic)}")` }}>
            </div>
            <div id="text-board" className="flex-style">
                <HeaderText text={`Level: ${level}`} class="text-light text-bold" />
                <HeaderText text={`Attempts: ${count}`} class="text-light text-bold" />
                <HeaderText text={`Time: ${time}`} class="text-light text-bold" />
            </div>
            <div id="layout-board" className="flex-style">
                {cardsArray}
            </div>
        </section>
    )
}