import React from "react";
import { useParams } from "react-router-dom";
import "./css/main.css";
import scheme2_1 from "./media/scheme2_1.png"
import scheme2_2 from "./media/scheme2_2.png"
import scheme2_3 from "./media/scheme2_3.png"
import scheme2_4 from "./media/scheme2_4.png"
import scheme2_5 from "./media/scheme2_5.png"
import scheme2_6 from "./media/scheme2_6.png"
import scheme2_7 from "./media/scheme2_7.png"
import scheme2_8 from "./media/scheme2_8.png"
import scheme2_9 from "./media/scheme2_9.png"
import scheme2_10 from "./media/scheme2_10.png"

export default function SecondExes() {
    const { num } = useParams();

       const secondStageExes = [

        { id: num, formul: 'Пусть задано некоторое число my_number. Пользователь вводит с клавиатуры свое число user_number. Запрашивайте у пользователя вводить число user_number если оно равно my_number.', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_1 },
        { id: num, formul: 'Дан произвольный список, содержащий только числа. Выведите построчно все строки размером менее 10 символов.', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_2 },
        { id: num, formul: 'Сгенерируйте и выведите. Случайную строку размером 6 символов, содержащую только цифры. Строка должна содержать хотя бы одну цифру 3.', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_3 },
        { id: num, formul: 'Пусть дана строка. На основе данной строки сформируйте новую, содержащую только буквы Л. Выведите новую строку.', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_4 },
        { id: num, formul: 'Пусть дана строка, состоящая из слов, пробелов и знаков препинания. На основании этой строки создайте новую (и выведите ее на консоль): Содержащую только слова размером от 5 до 10 символов.', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_5 },
        { id: num, formul: 'Пусть дана строковая переменная, содержащая информацию о студентах: my_string = «Ф;И;О;Возраст;Категория;_Иванов;Иван;Иванович;18 лет;Студент 2 курса;_Петров;Семен;Игоревич;17 лет;Студент 2 курса». ', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_6 },
        { id: num, formul: 'Пусть дана строковая переменная, содержащая информацию о студентах вида: my_string = «ФИО;Возраст;Категория;_Иванов Иван Иванович;23 года;Студент 3 курса;_Петров Семен Игоревич;22 года;Студент 2 курса;_Иванов Семен Игоревич;22 года;Студент 2 курса;_Акибов Ярослав Наумович;23 года;Студент 3 курса;_Борков Станислав Максимович;21 год;Студент 1 курса;_Петров Семен Семенович;21 год;Студент 1 курса;_Романов Станислав Андреевич;23 года;Студент 3 курса;_Петров Всеволод Борисович;21 год;Студент 2 курса». Выведите построчно информацию о студентах, чей возраст больше «21 года».', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_7 },
        { id: num, formul: 'Выведите построчно информацию о студентах, чей возраст больше «21 года».', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_8 },
        { id: num, formul: 'Пусть дана матрица чисел размером NхN. Представьте данную матрицу в виде списка. Выведите результат сложения всех элементов матрицы.', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_9 },
        { id: num, formul: 'Пусть дан список из 10 элементов. Удалите все четные элементы и добавьте 2 новых. Выведите список на экран.', replit: `https://replit.com/@adefrolx/ex2-${num}?lite=true`, scheme: scheme2_10 },
        
   
       ]
   

    return (
        <div>
            <h1>Задание {secondStageExes[num - 1].id}</h1>
            <div className="block">
                <h2>Формулировка</h2>
                <p>{secondStageExes[num - 1].formul}</p>
            </div>
            <div className="block">
                <h2>Код / Терминал</h2>
                <iframe frameBorder="0" width="100%" height="500px" src={secondStageExes[num - 1].replit} title={"Задание " + num}></iframe>
            </div>
            <div className="block">
                <h2>Блок-схема</h2>
                <img src={secondStageExes[num - 1].scheme} alt={"Схема " + num} />
            </div>
        </div>
    );


}