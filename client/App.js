import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import SettingPage from "./pages/Settings";
import GamePage from "./pages/Game";

export default function App() {

    const [data, setData] = useState({
        topic: "",
        level: ""
    });

    const callbackFunction = (childData) =>{
        setData({
            topic: childData.topic,
            level: childData.level
        })
    }

    return (
        <Switch>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route exact path="/settings">
                <SettingPage parentCallback={callbackFunction} />
            </Route>
            <Route exact path="/game">
                <GamePage topic={data.topic} level={data.level}/>
            </Route>
        </Switch>       
    )
}