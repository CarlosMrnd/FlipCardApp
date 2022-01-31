import React from "react";
import { Link } from "react-router-dom";
import HeaderText from "../components/HeaderText";
import portada from "../images/Portada.svg";

export default function HomePage() {
    return (
        <section id="welcome-sct" className="flex-style">
            <div id="welcome-img" style={{ backgroundImage: `url("${portada}")` }}></div>
            <div id="col-cta" className="flex-style">
                <HeaderText class="text-light text-bold"
                    text="Try to find all the matches before time end!"
                />
                <Link to="/settings" className="play-btn text-bold">Play</Link>
            </div>
        </section>
    )
}