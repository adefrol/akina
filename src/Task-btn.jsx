import React from "react";
import { Link, useParams } from "react-router-dom";

const TaskBtn = (props) => {
    const {num} = useParams();
    console.log(num);

    return (
        <div className="btn">
            <Link className="btn__stage" to={`/stages/stage-${num}/ex-${props.setting.num}`}>Задача 1</Link>
        </div>
    );
};

export default TaskBtn;