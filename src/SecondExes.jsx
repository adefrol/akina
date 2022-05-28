import React from "react";
import { useParams } from "react-router-dom";
import "./css/main.css";

export default function SecondExes() {
    const { num } = useParams();

       const secondStageExes = [

           { id: num, formul: '134aaaaaaaaaaaaaaaa2094120491' },
           { id: num, formul: '1213frasdqwd4aaaaaaaaaaaaaaaa2094120491' }
   
       ]
   

    return (
        <div>
            <h1>Задание {secondStageExes[num - 1].id}</h1>
            <h1>Формулировка</h1>
            <p>{secondStageExes[num - 1].formul}</p>
        </div>
    );


}