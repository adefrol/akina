import React from "react";
import { Link } from "react-router-dom";

const StageBtn = (props) => {
    return (
        <Link className="btn__stage" to={`/stages/stage-${props.btn.num}`}>Этап {props.btn.num}</Link>
    );
};

export default StageBtn;