import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Stages from "./Stages";
import Mainpage from "./Mainpage";
import Team from "./Team";
import Error from "./404";
import "./Header.css";
import logo from "./team.png";

export default function Header() {
  return (
        <BrowserRouter>
        <div className="container">
          <div className="flex">
            <img src={logo} alt="" className="logo"/>
            <div>
              <Link to="" className="link">Главная</Link>
            </div>
            <div>
              <Link to="/team" className="link">Команда</Link>
            </div>
            <div>
              <Link to="/stages" className="link">Этапы</Link>
            </div>
          </div>

          <div className="hr"></div>
          <Routes>
            <Route path="/" element={<Mainpage />}></Route>
            <Route path="/team" element={<Team />}></Route>
            <Route path="/stages" element={<Stages />}></Route>
            <Route path="/404" element={<Error/>}></Route>
            <Route path="*" element={<Navigate replace to="/404" />} />
          </Routes>
        </div>
        <div className="footer">
          <div className="container">
            <div className="flex__footer">
              <Link to="" className="link__footer">Главная</Link>
              <Link to="/team" className="link__footer">Команда</Link>
              <Link to="/stages" className="link__footer">Этапы</Link>
              <a href="https://github.com/adefrol/akina" className="link__footer">Репозиторий GitHub</a>
            </div>
            <p>akina team ©</p>
          </div>
        </div>
      </BrowserRouter>
  );
}