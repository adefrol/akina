import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Error() {
    return(
        <div className="error__page">
            <h2>Ошибка 404</h2>
            <div>
                <Link to="/" className="error"><h2>Главная</h2></Link>
            </div>
        </div>
    );
}