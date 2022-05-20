import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import Exercises from "./Exercises";
import Home from "./Home";
import Team from "./Team";
import Error from "./404";
import "./Header.css";
import logo from "./team.png";

export default function Header() {
  return (
    <BrowserRouter>
      <div>
        <div className="flex">
          <img src={logo} alt="" className="logo"/>
          <div>
            <Link to="" className="link">Главная</Link>
          </div>
          <div>
            <Link to="/team" className="link">Команда</Link>
          </div>
          <div>
            <Link to="/exercises" className="link">Упражнения</Link>
          </div>
        </div>

        <hr />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/team" element={<Team />}></Route>
          <Route path="/exercises" element={<Exercises />}></Route>
          <Route path="/404" element={<Error/>}></Route>
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}