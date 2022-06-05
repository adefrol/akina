import React from "react";
import { useParams } from "react-router-dom";
import kurbatov from "./media/kurbatov.png"
import zinkevich from "./media/zinkevich.png"
import pikutsky from "./media/pikutsky.png"
import kokorina from "./media/kokorina.png"
import bogdanovich from "./media/bogdanovich.png"

export default function Member() {
    const { num } = useParams();

    const info = [
        {name : 'Иван Курбатов', role : 'Капитан', img : kurbatov, info1 : 'Меня зовут Иван, мне 18 лет, я студент группы 2ИС-20 Иркутского энергетического колледжа.', info2 : 'Я выбрал эту специальность, потому что ещё до окончания школы, мне были интересны IT технологии. После колледжа я планирую дальше самообразовываться и стать full-stack специалистом, и найти компанию которая мне по душе. Мои увлечения - это создавать сайты, заниматься дизайном и 3D-моделированием.', softskills : <ul><li>Коммуникация</li><li>Рефлексия</li><li>Перфекционизм</li><li>Адаптируемость</li><li>Многозадачность</li></ul>,  hardskills : <ul><li>HTML, CSS, JS</li><li>REACT.JS</li><li>Python</li><li>Adobe Photoshop,<br/> Illustrator</li><li>Blender</li><li>MS Office</li></ul>, email : 'adefrolx@gmail.com', phone : '+79248294653'},
        {name : 'Анастасия Кокорина', role : 'Главный помощник капитана', img : kokorina, info1 : 'Меня зовут Анастасия, мне 17 лет, и я студентка группы 2ИС-20 Иркутского энергетического колледжа.', info2 : 'Я выбрала эту специальность, потому что считаю её наиболее перспективной в будущем. После окончания колледжа в планах развиваться в этой деятельности и дальше, возможен вариант получить высшее. Мои увлечение – это коллекционирование бесполезных для других, но интересных для меня вещей.', softskills : <ul><li>Коммуникабельность</li><li>Порядочность</li><li>Эмпатия</li><li>Толерантность</li></ul>, hardskills : <ul><li>HTML, CSS<br/>на среднем уровне</li><li>MS Office</li><li>Adobe Photoshop</li><li>Blender</li></ul>, email : 'kokorina-a-a@yandex.ru', phone : '+79501192210'},
        {name : 'Никита Зинкевич', role : 'Главный кодер', img : zinkevich, info1 : 'Меня зовут Никита, мне 18 лет, я студент группы 2ИС-20 Иркутского энергетического колледжа.', info2 : 'Я выбрал эту специальность, потому что вижу IT технологии как часть нашего мира и его необходимо изучать для дальнейшей жизни. После колледжа я планирую дальше учиться в IT сфере повышая свою квалификацию. Мои увлечения - это заниматься спортом и улучшать свои познания в IT сфере.', softskills : <ul><li>Коммуникация</li><li>Критическое мышление</li><li>Умение решать комплексные задачи</li></ul>, hardskills : <ul><li>HTML, CSS</li><li>Python</li><li>Adobe Photoshop</li><li>Corel Draw</li><li>MS Office</li></ul>, email : 'zinkevich-n-n@yandex.ru', phone : '+79086549743'},
        {name : 'Ксения Богданович', role : 'Главный по инженерной книге', img : bogdanovich, info1 : 'Меня зовут Ксения, мне 19 лет, и я студентка группы 2ИС-20 Иркутского энергетического колледжа.', info2 : 'Я выбрала эту специальность из-за ее высокой востребованности и множества сфер для развития, также и творческих. После окончания колледжа планирую развиваться в сфере UX/UI дизайна и воплотить свои идеи в жизнь . На данный момент увлекаюсь копирайтингом (креативным,техническим) и рерайтингом. Главной целью в жизни является достижение физического, душевного, социального здоровья и благополучия. Главный приоритет в жизни - мирное небо над головой.', softskills : <ul><li>Толерантность</li><li>Адаптируемость</li><li>Креативность</li></ul>, hardskills : <ul><li>HTML, CSS</li><li>MS Office</li><li>Умение работать с текстом</li><li>Грамотность</li><li>Навык сочинения</li></ul>, email : 'iyerofant@yandex.ru', phone : '+79832480990'},
        {name : 'Алексей Пикуцкий', role : 'Главный активист', img : pikutsky, info1 : 'Меня зовут Алексей, мне 18 лет, я студент группы 2ИС-20 Иркутского энергетического колледжа.', info2 : 'Востребованность и т.к IT-сфера не стоит на месте всегда есть куда развиваться. После колледжа я буду продолжать развитие в этом направлении, но уже самостоятельно. В качестве работы мне бы хотелось заняться написанием сайтов.', softskills : <ul><li>Коммуникация</li><li>Адаптируемость</li><li>Стрессоустойчивость</li></ul>, hardskills : <ul><li>HTML, CSS</li><li>Adobe Photoshop</li><li>MS Office</li></ul>, email : 'pikutsky-a-m-228@yandex.ru', phone : '+79526164693'}
    ]

    return (
        <div className="container">
            <div className="member__page">
                <h1>{info[num-1].name}</h1>
                <h1 className="member__h">{info[num-1].role}</h1>

                <img src={info[num-1].img} alt="" className="member" />
                <div className="frame">
                    <h2>Немного о себе</h2>
                    <p>{info[num-1].info1}</p>
                    <h3>Почему я выбрал эту специальность? Мои увлечения, жизненные цели и приоритеты</h3>
                    <p>{info[num-1].info2}</p>
                </div>
                <div className="flex-sp-ar">
                    <div className="list__item">
                        <h2>Soft Skills</h2>
                        {info[num-1].softskills}
                    </div>
                    
                    <div className="list__item">
                        <h2>Hard Skills</h2>
                        {info[num-1].hardskills}
                    </div>

                </div>
                <h2>Мои контакты</h2>
                <p>E-mail: <a href={'mailto: '+info[num-1].email}>{info[num-1].email}</a></p>
                <p>Телефон: <a href={'tel:'+info[num-1].phone}>{info[num-1].phone}</a></p>
            </div>
        </div>
    );
}