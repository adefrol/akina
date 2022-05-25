import React, { useState } from "react";
import {} from "react-router-dom";
import "./css/main.css";
import StageBtn from "./stage-btn";



export default function Stages() {
    const [btns] = useState([
        {num: 1},
        {num: 2},
        {num: 3},
    ])
    



    return (
        <div>
            <h2>Выбор этапа</h2>
            {btns.map(btn =>
                <StageBtn btn={btn} key={btn.num}/>)}
        </div>
    );
}