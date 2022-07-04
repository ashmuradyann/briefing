import { useEffect } from 'react'
import TextArea from '../../../../styled-components/TextArea/index'

const Third = ({ setTitle, data, setData }) => {

    useEffect(() => {
        setTitle("Самообразование")
    }, [])

    return (
        <div className="question__wrapper">
            <div className="input__wrapper">
                <div className="input_textarea_wrapper">
                    <label>Читаете книги?</label>
                    <div>
                        <TextArea value={data.books} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, books: e.target.value})} />
                        <p>Расскажите, какие книги прочитали за последний год? Какая из списка понравилась больше всего?</p>
                    </div>
                </div>
                <div className="input_textarea_wrapper">
                    <label>Какие курсы вы проходили в последнее время?</label>
                    <div>
                        <TextArea value={data.courses} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, courses: e.target.value})} />
                        <p>Какие курсы, лекции, марафоны проходили? Может быть, изучали документации или кейсы коллег по цеху?</p>
                    </div>
                </div>
                <div className="input_textarea_wrapper">
                    <label>Какими источниками пользуетесь?</label>
                    <div>
                        <TextArea value={data.sources} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, sources: e.target.value})} />
                        <p>Поделитесь источниками - на какие профессиональные паблики или профили вы подписаны? Блоги, СМИ, сервисы, авторы - всё, что вдохновляет и помогает в личном и профессиональном росте!</p>
                    </div>
                </div>
                <div className="input_textarea_wrapper">
                    <label>Кем видите себя через 5 лет?</label>
                    <div>
                        <TextArea value={data.expectionsIn5Years} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, expectionsIn5Years: e.target.value})} />
                        <p>Мы собираем команду не на 1 день. Поэтому хочется работать с амбициозными людьми, которые жаждут покорять новые горизонты! До какого профессионального уровня вы хотели бы дорасти?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Third