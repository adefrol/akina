import React, { useState } from "react";
import { useParams } from "react-router-dom";
import TaskBtn from "./Task-btn";


import "./css/main.css";

export default function Stage() {
    const { num } = useParams();
    const [firstSettings] = useState(
        [
            { num: 1 },
            { num: 2 },
            { num: 3 },
            { num: 4 }
        ]
    )
    const [secondSettings] = useState(
        [
            { num: 1 },
            { num: 2 },
            { num: 3 },
            { num: 4 },
            { num: 5 },
            { num: 6 },
            { num: 7 },
            { num: 8 },
            { num: 9 },
            { num: 10 }
        ]
    )
    const [thirdSettings] = useState(
        [
            { num: 1 },
            { num: 2 }
        ]
    )

    if (num === "1") {
        return (
            <div className="container">
                <div className="stage">
                <h1>Выбор задания</h1>
                <div className="flex">
                    {firstSettings.map(setting =>
                        <TaskBtn setting={setting} key={setting.num} />)}
                </div>

            </div>
            </div>
        );
    }
    if (num === "2") {
        return (
            <div className="container">
                <div className="stage">
                <h1>Выбор задания</h1>
                <div className="flex">
                    {secondSettings.map(setting =>
                        <TaskBtn setting={setting} key={setting.num} />)}
                </div>
            </div>
            </div>
        );
    }
    if (num === "3") {
        return (
            <div className="container">
                <div className="stage">
                <h1>Выбор задания</h1>
                <div className="flex">
                    {thirdSettings.map(setting =>
                        <TaskBtn setting={setting} key={setting.num} />)}
                </div>
            </div>
            </div>
        );
    }
}
