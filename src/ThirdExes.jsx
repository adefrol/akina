import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./css/main.css";
import scheme3_1 from "./media/scheme3_1.png"
import scheme3_2 from "./media/scheme3_2.png"

export default function ThirdExes() {
    const { num } = useParams();

    const thirdStageExes = [
        { id: num, formul: 'Необходимо написать программу, многократно суммирующую цифры числа, пока не останется одна цифра.', staging: 'Дано – число n. Вывод – суммированное до одной цифры число n.', formal: 'Пользователь вводит число n, запускаем цикл «пока», в теле цикла мы перебираем число n с помощью функции map, и суммируем эти числа до тех пор, пока n не станет меньше 10.', replit: `https://replit.com/@adefrolx/ex3-${num}?lite=true`, scheme: scheme3_1 },
        { id: num, formul: 'На конвейерной ленте есть коробки с посылками, которые необходимо отправить из одного порта в другой в течение N дней. Исходно дан массив с весами каждой коробки. Каждый день мы загружаем на корабль коробки с посылками. Общий вес загружаемых коробок с посылками не может быть больше чем максимальная грузоподъемность судна. Необходимо определить наименьшую грузоподъемность судна, чтобы отправить все коробки с посылками в течение указанного количество дней.', staging: 'Дано – количество дней, количество коробок, массив с весом каждой коробки. Вывод – наименьшая грузоподъемность судна.', formal: 'Вводим days, boxes, list, n равно сумме массы всех коробок, деленной на кол-во коробок, создаем oneday и sumday как пустые списки и a со значением 0 для цикла. Создаем условие, если количество коробок в list не соответствует количеству вписанному в boxes, то прекращаем программу, если соответствует, то запускаем цикл в диапазоне значения days, в теле цикла добавляем каждый раз в список oneday ещё один список, в теле создаем ещё один цикл в диапазоне от a до n минус 1, в теле цикла мы добавляем в подсписок списка oneday значения list по порядку. В теле родительского цикла в конце добавляем, что в переменной а, мы отнимаем уже добавленные коробки в oneday, выходим из цикла. Создаем новый цикл в диапазоне длины oneday, в теле которого мы добавляем в sumday каждый суммированный элемент из списка oneday, выходим из цикла. Выводим максимальное значение из списка sumday, наименьшую грузоподъемность.', replit: `https://replit.com/@adefrolx/ex3-${num}?lite=true`, scheme: scheme3_2 },

    ]


    return (
        <div className="container">
            <div className="ex">
                <h1>Задание {thirdStageExes[num - 1].id}</h1>
                <div className="block">
                    <h2>Формулировка</h2>
                    <p>{thirdStageExes[num - 1].formul}</p>
                </div>
                <div className="block">
                    <div className="ex__item">
                        <h2>Постановка</h2>
                        <p>
                            {thirdStageExes[num - 1].staging}
                        </p>
                    </div>
                    <div className="ex__item">
                        <h2>Формализация</h2>
                        <p>{thirdStageExes[num - 1].formal}</p>
                    </div>
                </div>
                <div className="block">
                    <h2>Код / Терминал</h2>
                    <iframe frameBorder="0" width="100%" height="700px" src={thirdStageExes[num - 1].replit} title={"Задание " + num}></iframe>
                </div>
                <div className="block">
                    <h2>Блок-схема</h2>
                    <img src={thirdStageExes[num - 1].scheme} alt={"Схема " + num} />
                </div>
                <div className="block">
                    <Link to='/download' className="btn__main">Скачивание задач</Link>
                </div>
            </div>
        </div>
    );


}