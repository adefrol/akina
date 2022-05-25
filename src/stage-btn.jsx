import React from "react";
import { Link } from "react-router-dom";

const StageBtn = (props) => {
    return (
        <div className="btn">
            <Link className="btn__stage" to={`/stages/stage-${props.btn.num}`}>Этап {props.btn.num}</Link>
        </div>
    );
};

export default StageBtn;