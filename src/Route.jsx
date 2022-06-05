import React from "react";
import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from "react-router-dom";
import "./css/main.css";
import Stages from "./Stages";
import Mainpage from "./Mainpage";
import Team from "./Team";
import Error from "./404";
import Stage from "./Stage";
import FirstExes from "./FirstExes"
import SecondExes from "./SecondExes"
import ThirdExes from "./ThirdExes";

import logo from "./media/team.png";
import Member from "./Member";
import Download from "./Download";


export default function Main() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <header className="header">
                    <div className="flex-sp-ar">
                        <div className="mobile">
                            <Link to="" className="logo__link"><img src={logo} alt="" className="logo" /></Link>
                        </div>
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

                    <Routes>
                        <Route path="/download" element={<Download />}></Route>
                        <Route path="/" element={<Mainpage />}></Route>
                        <Route path="/team" element={<Team />}></Route>
                        <Route path="/team/member-:num" element={<Member />}></Route>
                        <Route path="/stages" element={<Stages />}></Route>
                        <Route path="/stages/stage-:num" element={<Stage />}></Route>
                        <Route path="/stages/stage-1/ex-:num" element={<FirstExes />}></Route>
                        <Route path="/stages/stage-2/ex-:num" element={<SecondExes />}></Route>
                        <Route path="/stages/stage-3/ex-:num" element={<ThirdExes />}></Route>
                        <Route path="*" element={<Error />} />
                    </Routes>

                </main>
                <footer className="footer">
                    <div className="container">
                        <div className="flex-sp-ar">
                            <Link to="" className="link__footer">Главная</Link>
                            <Link to="/team" className="link__footer">Команда</Link>
                            <Link to="/stages" className="link__footer">Этапы</Link>
                            <Link to='/download' className="link__footer">Скачивание файлов</Link>
                            <a href="https://github.com/adefrol/akina" className="link__footer">Репозиторий GitHub</a>
                        </div>
                        <p>© AKINA TEAM - since 2021 </p>
                        <p>Roboto Font Author: Copyright 2011 Google Inc. All Rights Reserved. </p><br />
                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}

