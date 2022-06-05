import React from "react";
import { Link } from "react-router-dom";

export default function MemberBtn(props) {
    return (
        <div className="flex-sp-ar">
            <Link to={`/team/member-${props.member.num}`} className="team__link">
                <div className="photo__block__teambg">
                    <div className="photo__block__team">
                        <h3>{props.member.name}</h3>
                    </div>
                </div>
            </Link>
            <Link to={`/team/member-${props.member.num}`} className="team__link"><h1>{props.member.role}</h1></Link>
        </div>
    );
}