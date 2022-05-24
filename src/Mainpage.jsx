import React from "react";
import { Link } from "react-router-dom";
import "./css/main.css";



export default function Mainpage() {
    return (
        <div className="mainpage">
            <div>
                <p className="greeting">Hello World! Мы команда</p>
                <h1 className="akina__headling">akina</h1>
            </div>
            <div className="photo__block"></div>
            <div className="about">
                <h2>О нас</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam excepturi beatae, modi omnis voluptatem esse veniam quae debitis reprehenderit maiores consectetur! Iusto molestiae suscipit voluptate dolor reiciendis ut reprehenderit cumque vero asperiores, consectetur debitis, tenetur sit aut quo possimus blanditiis. Neque omnis vero sint illo laboriosam culpa voluptatibus voluptates suscipit?</p>
            </div>
            <div className="flex-sp-ar">
                <Link to="/stages" className="btn">Перейти к этапам</Link>
                <Link to="/team" className="btn">Перейти к участникам</Link>
            </div>
        </div>
    );
  }