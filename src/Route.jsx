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


export default function Main() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <header className="header">
                    <div className="flex-sp-ar">
                        <Link to="" className="logo__link"><img src={logo} alt=""  className="logo"/></Link>
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
                            <Route path="/team/member-:num" element={<Member/>}></Route>
                            <Route path="/stages" element={<Stages />}></Route>
                            <Route path="/stages/stage-:num" element={<Stage />}></Route>
                            <Route path="/stages/stage-1/ex-:num" element={<FirstExes />}></Route>
                            <Route path="/stages/stage-2/ex-:num" element={<SecondExes />}></Route>
                            <Route path="/stages/stage-3/ex-:num" element={<ThirdExes />}></Route>
                            <Route path="*" element={<Error/>} />
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

