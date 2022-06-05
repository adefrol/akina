import React from 'react';
import ex1_1 from './download/1-1.py';
import ex1_2 from './download/1-2.py';
import ex1_3 from './download/1-3.py';
import ex1_4 from './download/1-4.py';
import ex2_1 from './download/2-1.py';
import ex2_2 from './download/2-2.py';
import ex2_3 from './download/2-3.py';
import ex2_4 from './download/2-4.py';
import ex2_5 from './download/2-5.py';
import ex2_6 from './download/2-6.py';
import ex2_7 from './download/2-7.py';
import ex2_8 from './download/2-8.py';
import ex2_9 from './download/2-9.py';
import ex2_10 from './download/2-10.py';
import ex3_1 from './download/3-1.py';
import ex3_2 from './download/3-2.py';
import all_tasks from './download/all-tasks.zip'
import all_schemes from './download/all-schemes.zip'

export default function Download() {
    return (
        <div className='container'>
            <div className="download">
                <h1>Скачивание файлов</h1>
                <ul>
                    <h2>Этап 1</h2>
                    <li><a href={ex1_1} download>Задание 1</a></li>
                    <li><a href={ex1_2} download>Задание 2</a></li>
                    <li><a href={ex1_3} download>Задание 3</a></li>
                    <li><a href={ex1_4} download>Задание 4</a></li>
                    <h2>Этап 2</h2>
                    <li><a href={ex2_1} download>Задание 1</a></li>
                    <li><a href={ex2_2} download>Задание 2</a></li>
                    <li><a href={ex2_3} download>Задание 3</a></li>
                    <li><a href={ex2_4} download>Задание 4</a></li>
                    <li><a href={ex2_5} download>Задание 5</a></li>
                    <li><a href={ex2_6} download>Задание 6</a></li>
                    <li><a href={ex2_7} download>Задание 7</a></li>
                    <li><a href={ex2_8} download>Задание 8</a></li>
                    <li><a href={ex2_9} download>Задание 9</a></li>
                    <li><a href={ex2_10} download>Задание 10</a></li>
                    <h2>Этап 3</h2>
                    <li><a href={ex3_1} download>Задание 1</a></li>
                    <li><a href={ex3_2} download>Задание 2</a></li>
                    <h2>Архивы</h2>
                    <li><a href={all_tasks} download>Архив cо всеми задачами</a></li>
                    <li><a href={all_schemes} download>Архив со всеми блок-схемами + исходник Visio</a></li>

                </ul>
            </div>
        </div>
    )
}
