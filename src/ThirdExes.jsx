import React from "react";
import { useParams } from "react-router-dom";
import "./css/main.css";

export default function ThirdExes() {
    const { num } = useParams();

    const firstStageExes = [
        { id: num, formul: '12312312094120491' },
        { id: num, formul: '1rrrrrrr2312312094120491' }
    ]
    /*   const secondStageExes = [
           { id: num, formul: '134aaaaaaaaaaaaaaaa2094120491' },
           { id: num, formul: '1213frasdqwd4aaaaaaaaaaaaaaaa2094120491' }
   
   
       ]
   */

    return (
        <div>
            <h1>В разработке</h1>
        </div>
    );


}