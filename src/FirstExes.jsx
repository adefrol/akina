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
        { id: num, formul: 'Напишите программу для решения задачи. Предусмотрите проверку деления на ноль. Все необходимые переменные пользователь вводит через консоль. Запись |пример| означает <<Взять по модулю>>, т.е. если значение получится отрицательным, необходимо сменить знак с минуса на плюс. |1-a*b^c-a*(b^2-c^2) + (b-c+a)*(12+b)/(c-a)|', staging: 'Дано – 3 числа. Вывод – решенный пример по формуле со значениями переменных.', formal: 'Ввод a, b, c. Проверка, равно ли c – a нулю, если не равно – выполняем решение по формуле, вывод результата; если равно – вывод – “а ноль делить нельзя”.', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_1 },
        { id: num, formul: 'Дан произвольный список, содержащий и строки и числа. Выведите все нечетные элементы в одной строке.', staging: 'Дано – слова и числа через пробел. Вывод – нечетные элементы в одной строке.', formal: 'Ввод list, разбиение list по пробелам, создание переменной resultList для вывода результата. Запускаем цикл i от 0 до длинны list, с шагом 2, в теле цикла указываем заполнение resultList элементами list с индексом i. Вывод – resultList.', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_2 },
        { id: num, formul: 'Дан произвольный список, содержащий только числа. Выведите результат сложение всех чисел больше 10.', staging: 'Дано – список чисел через пробел. Вывод – результат сложения всех чисел больше 10.', formal: 'Ввод int list, разбиение list по пробелам, создание переменной result со значением 0, для вывода суммы. Запускаем цикл i от 0 до длинны list с шагом 1, в теле цикла указываем условие, если list[i] > 10, то прибавляем к result – list[i]. Выводим result.', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_3 },
        { id: num, formul: 'Дан произвольный список, содержащий только числа. Выведите среднее арифметическое (сумма всех чисел, деленная на количество элементов).', staging: 'Дано – список чисел через пробел.Вывод – среднее арифметическое всех элементов.', formal: 'Ввод list, разбиение list по пробелам, создание переменных sum для вычисления суммы', replit: `https://replit.com/@adefrolx/ex1-${num}?lite=true`, scheme: scheme1_4 }
    ]

    return (
        <div className="container">
            <div className="ex">
                <h1>Задание {firstStageExes[num - 1].id}</h1>
                <div className="block">
                    <h2>Формулировка</h2>
                    <p>{firstStageExes[num - 1].formul}</p>
                </div>
                <div className="block">
                    <div className="ex__item">
                        <h2>Постановка</h2>
                        <p>
                            {firstStageExes[num - 1].staging}
                        </p>
                    </div>
                    <div className="ex__item">
                        <h2>Формализация</h2>
                        <p>{firstStageExes[num - 1].formal}</p>
                    </div>
                </div>
                <div className="block">
                    <h2>Код / Терминал</h2>
                    <iframe frameBorder="0" width="100%" height="700px" src={firstStageExes[num - 1].replit} title={"Задание " + num}></iframe>
                </div>
                <div className="block">
                    <h2>Блок-схема</h2>
                    <img src={firstStageExes[num - 1].scheme} alt={"Схема " + num} />
                </div>
            </div>
        </div>
    );


}