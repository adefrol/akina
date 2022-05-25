import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";
import "./css/main.css";
import Stages from "./Stages";
import Mainpage from "./Mainpage";
import Team from "./Team";
import Error from "./404";
import Stage from "./Stage";
import Ex from "./Ex"

import logo from "./media/team.png";

export default function Header() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <header className="header">
                    <div className="flex-sp-ar">
                        <img src={logo} alt="" className="logo" />
                        <div className="mobile">
                            <Link to="" className="link__header">Главная</Link>
                        </div>
                        <div className="mobile">
                            <Link to="/team" className="link__header">Команда</Link>
                        </div>
                        <div className="mobile">
                            <Link to="/stages" className="link__header">Этапы</Link>
                        </div>
                    </div>
                    <div className="hr"></div>
                </header>
                <main className="body">
                    <div className="container">
                        <Routes>
                            <Route path="/" element={<Mainpage />}></Route>
                            <Route path="/team" element={<Team />}></Route>
                            <Route path="/stages" element={<Stages />}></Route>
                            <Route path="/stages/stage-:num" element={<Stage />}></Route>
                            <Route path="/stages/stage-:num/ex-:num" element={<Ex />}></Route>
                            <Route path="/404" element={<Error />}></Route>
                            <Route path="*" element={<Navigate replace to="/404" />} />
                        </Routes>
                    </div>
                </main>
                <footer className="footer">
                    <div className="container">
                        <div className="flex-sp-ar">
                            <Link to="" className="link__footer">Главная</Link>
                            <Link to="/team" className="link__footer">Команда</Link>
                            <Link to="/stages" className="link__footer">Этапы</Link>
                            <a href="https://github.com/adefrol/akina" className="link__footer">Репозиторий GitHub</a>
                        </div>
                        <p>akina team ©</p>
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}