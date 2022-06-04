import React, { useState } from "react";
import "./css/main.css";
import MemberBtn from "./Member-btn";

export default function Team() {
    const [memberSetting] = useState([
        { num: 1, name: 'Иван Курбатов', role: 'Капитан' },
        { num: 2, name: 'Анастасия Кокорина', role: 'Главный помощник' },
        { num: 3, name: 'Никита Зинкевич', role: 'Главный кодер' },
        { num: 4, name: 'Ксения Богданович', role: 'Главная по инженерной книге' },
        { num: 5, name: 'Алексей Пикуцкий', role: 'Главный активист' },
    ])


    return (
        <div className="team">
            <h1>Наши участники</h1>
            <div className="flex">
                {memberSetting.map (member => 
                <MemberBtn member={member} key={member.num}/>)}
            </div>
        </div>
    );
}