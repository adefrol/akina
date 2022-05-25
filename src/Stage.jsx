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
  /*  const [thirdSettings] = useState(
        [
            { num: 1 },
            { num: 2 },
            { num: 3 },
            { num: 4 }
        ]
    )
  */
    if (num === "1") {
        return (
            <div>
                <h2>Выбор этапа</h2>
                {firstSettings.map(setting =>
                    <TaskBtn setting={setting} key={setting.num} />)}
            </div>
        );
    }
    if (num === "2") {
        return (
            <div>
                <h2>Выбор этапа</h2>
                {secondSettings.map(setting =>
                    <TaskBtn setting={setting} key={setting.num} />)}
            </div>
        );
    }
}
