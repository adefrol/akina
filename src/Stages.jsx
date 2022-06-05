import React, { useState } from "react";
import { } from "react-router-dom";
import "./css/main.css";
import StageBtn from "./stage-btn";



export default function Stages() {
    const [btns] = useState([
        { num: 1 },
        { num: 2 },
        { num: 3 },
    ])




    return (
        <div className="container">
            <div className="stage">
                <h1>Выбор этапа</h1>
                <div className="flex">
                    {btns.map(btn =>
                        <StageBtn btn={btn} key={btn.num} />)}
                </div>
            </div>
        </div>
    );
}