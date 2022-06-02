import React from "react";
import { useParams } from "react-router-dom";
import "./css/main.css";
import scheme1_1 from "./media/scheme1_1.png"
import scheme1_2 from "./media/scheme1_2.png"
import scheme1_3 from "./media/scheme1_3.png"
import scheme1_4 from "./media/scheme1_4.png"

export default function FirstExes() {
    const { num } = useParams();

    const firstStageExes = [
        { id: num, formul: 'Напишите программу для решения задачи. Предусмотрите проверку деления на ноль. Все необходимые переменные пользователь вводит через консоль. Запись |пример| означает <<Взять по модулю>>, т.е. если значение получится отрицательным, необходимо сменить знак с минуса на плюс. ', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_1 },
        { id: num, formul: 'Дан произвольный список, содержащий и строки и числа. Выведите все нечетные элементы в одной строке.', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_2 },
        { id: num, formul: 'Дан произвольный список, содержащий только числа. Выведите результат сложение всех чисел больше 10.', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_3 },
        { id: num, formul: 'Дан произвольный список, содержащий только числа. Выведите среднее арифметическое (сумма всех чисел, деленная на количество элементов).', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_4 }
    ]

    return (
        <div>
            <h1>Задание {firstStageExes[num - 1].id}</h1>
            <div className="block">
                <h2>Формулировка</h2>
                <p>{firstStageExes[num - 1].formul}</p>
            </div>
            <div className="block">
                <h2>Код / Терминал</h2>
                <iframe frameBorder="0" width="100%" height="500px" src={firstStageExes[num - 1].replit} title={"Задание " + num}></iframe>
            </div>
            <div className="block">
                <h2>Блок-схема</h2>
                <img src={firstStageExes[num - 1].scheme} alt={"Схема " + num} />
            </div>
        </div>
    );


}