import React from "react";
import { useParams } from "react-router-dom";
import "./css/main.css";
import scheme1_1 from "./media/scheme1_1.png"

export default function FirstExes() {
    const { num } = useParams();

    const firstStageExes = [
        { id: num, formul: 'example text', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_1  },
        { id: num, formul: '1rrrrrrr2312312094120491', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_1 }
    ]
    /*   const secondStageExes = [
           { id: num, formul: '134aaaaaaaaaaaaaaaa2094120491' },
           { id: num, formul: '1213frasdqwd4aaaaaaaaaaaaaaaa2094120491' }
   
   
       ]
   */

    return (
        <div>
            <h1>Задание {firstStageExes[num - 1].id}</h1>
            <h2>Формулировка</h2>
            <p>{firstStageExes[num - 1].formul}</p>
            <h2>Код / Терминал</h2>
            <iframe frameBorder="0"  width="100%" height="500px" src={firstStageExes[num - 1].replit}></iframe>
            <h2>Блок-схема</h2>
            <img src={firstStageExes[num - 1].scheme} alt="" />
        </div>
    );


}