import React from "react";
import { Link } from "react-router-dom";

export default function MemberBtn(props) {
    return (
        <div className="flex-sp-ar">
            <Link to={`/team/member-${props.member.num}`} className="team__link">
                <div className="photo__block__team">
                    <h3>{props.member.name}</h3>
                </div>
            </Link>
            <h1>{props.member.role}</h1>
        </div>
    );
}