import React from "react";
import { Link } from "react-router-dom";
import "./css/main.css";

export default function Mainpage() {
    return (
        <div className="mainpage">
            <div className="container">
                <div>
                    <p className="greeting">Hello World! Мы команда</p>
                    <h1 className="akina__headling">akina</h1>
                    <p className="greeting">"A Keen IN A TEAM - endless work stream"</p>
                </div>
            </div>
            <div className="v-container">
                <div className="main__bg">
                    <div className="secondary__bg">
                        <div className="photo__block"></div>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="about">
                    <h2>О нас и нашем приложении</h2>
                    <p>Привет, мы команда akina, студенты группы 2ИС-20 ГБПОУ Иркутского энергетического колледжа, мы создали приложение для профессиональной длительной образовательной игры "Инженерная мысль ИЭК", в нашем приложении вы можете найти информацию о каждом участнике нашей команды, а также производственные задачи, над которыми мы трудились.</p>
                </div>
                <div className="flex-sp-ar">
                    <Link to="/stages" className="btn__main">Перейти к этапам</Link>
                    <Link to="/team" className="btn__main">Перейти к участникам</Link>
                </div>
            </div>
        </div>

    );
}