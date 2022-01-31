import React, { useState } from "react";
import { Link } from "react-router-dom";
import HeaderText from "../components/HeaderText";
import OptionMenu1 from "../components/OptionMenu1";
import OptionMenu2 from "../components/OptionMenu2";
import animal from "../images/Menu/cat-custom.svg";
import food from "../images/Menu/food-custom.svg";
import arcade from "../images/Menu/arcade-custom.svg";
import pingui from "../images/Menu/pingui-custom.svg";
import dogplay from "../images/Menu/dogplay-custom.svg";
import dogdap from "../images/Menu/dogdap-custom.svg";

export default function SettingPage(props) {

    const [settingsData, setSettingsData] = useState({
        topic: "",
        level: ""
    });

    const sendData = () => {
        props.parentCallback({
            topic: settingsData.topic,
            level: settingsData.level
        });
    }

    function handleChange(event) {
        const { name, value } = event.target;
        
        setSettingsData(prevData=>{
            return({
                ...prevData,
                [name]: value
            })
        })
    }

    return (
        <section id="customize-sct" className="flex-style">
            <HeaderText text="Customizing the game" class="text-light text-bold" />
            <div id="menu" className="flex-style">
                <div className="container flex-style">
                    <h3>Choose the topic</h3>
                    <OptionMenu1 class="flex-style option-menu"
                        source={animal} alt="animal picture"
                        pText="Animals"
                        iName="topic" iValue="animals" change={handleChange}
                        check={settingsData.topic === "animals"}
                    />
                    <OptionMenu1 class="flex-style option-menu"
                        source={food} alt="food picture"
                        pText="Food"
                        iName="topic" iValue="food" change={handleChange}
                        check={settingsData.topic === "food"}
                    />
                    <OptionMenu1 class="flex-style option-menu"
                        source={arcade} alt="arcade picture"
                        pText="Games"
                        iName="topic" iValue="games" change={handleChange}
                        check={settingsData.topic === "games"}
                    />
                </div>
                <div className="container flex-style">
                    <h3>Choose the level</h3>
                    <OptionMenu2 class="flex-style option-menu"
                        iName="level" iValue="easy" change={handleChange}
                        check={settingsData.level === "easy"}
                        pText="Easy"
                        source={pingui} alt="pingui picture"
                    />
                    <OptionMenu2 class="flex-style option-menu"
                        iName="level" iValue="medium" change={handleChange}
                        check={settingsData.level === "medium"}
                        pText="Medium"
                        source={dogplay} alt="dog picture"
                    />
                    <OptionMenu2 class="flex-style option-menu"
                        iName="level" iValue="hard" change={handleChange}
                        check={settingsData.level === "hard"}
                        pText="Hard"
                        source={dogdap} alt="cute dog picture"
                    />
                </div>
            </div>
            <div id="btns-sect2" className="flex-style">
                <Link to="/" className="start-btn text-bold">Home</Link>
                <Link to="/game" onClick={sendData} className="start-btn text-bold">Start</Link>
            </div>
        </section>
    )
}