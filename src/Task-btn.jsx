
import React from "react";
import { Link, useParams } from "react-router-dom";

const TaskBtn = (props) => {
    const { num } = useParams();
    return (
        <div className="btn">

            <Link className="btn__stage" to={`/stages/stage-${num}/ex-${props.setting.num}`}>Задача {props.setting.num}</Link>

        </div>

    );
};


export default TaskBtn;