import { memo } from 'react'

import Navigation from '../navigation/Navigation'
import TextArea from '../../../styled-components/TextArea/index'

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const Third = ({ data, setData, checkboxValid, setCheckboxValid, onFinish, activeIndex, setActiveIndex }) => {

    const handleChange = (event) => {
        const { name, value } = event.target
        if (value.length <= 150) {
            setData({...data, [name]: value})
        }
    }

    return (
        <>
            <div className="question__wrapper">
                <div className="input__wrapper">
                    <div className="input_textarea_wrapper">
                        <label>Читаете книги?</label>
                        <div>
                            <TextArea value={data.books} name="books" style={data.books.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" onChange={handleChange} />
                            <img style={data.books.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, books: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Расскажите, какие книги прочитали за последний год? Какая из списка понравилась больше всего?</p>
                        </div>
                        <p className="length" style={{margin: '5px 0 0 10px'}}>{data.books.length}/250</p>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Какие курсы вы проходили в последнее время?</label>
                        <div>
                            <TextArea value={data.courses} name="courses" style={data.courses.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" onChange={handleChange} />
                            <img style={data.courses.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, courses: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Какие курсы, лекции, марафоны проходили? Может быть, изучали документации или кейсы коллег по цеху?</p>
                        </div>
                        <p className="length" style={{margin: '5px 0 0 10px'}}>{data.courses.length}/250</p>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Какими источниками пользуетесь?</label>
                        <div>
                            <TextArea value={data.sources} name="sources" style={data.sources.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" onChange={handleChange} />
                            <img style={data.sources.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, sources: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Поделитесь источниками - на какие профессиональные паблики или профили вы подписаны? Блоги, СМИ, сервисы, авторы - всё, что вдохновляет и помогает в личном и профессиональном росте!</p>
                        </div>
                        <p className="length" style={{margin: '5px 0 0 10px'}}>{data.sources.length}/250</p>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Кем видите себя через 5 лет?</label>
                        <div>
                            <TextArea value={data.expectionsIn5Years} name="expectionsIn5Years" style={data.expectionsIn5Years.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" onChange={handleChange} />
                            <img style={data.expectionsIn5Years.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, expectionsIn5Years: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Мы собираем команду не на 1 день. Поэтому хочется работать с амбициозными людьми, которые жаждут покорять новые горизонты! До какого профессионального уровня вы хотели бы дорасти?</p>
                        </div>
                        <p className="length" style={{margin: '5px 0 0 10px'}}>{data.expectionsIn5Years.length}/250</p>
                    </div>
                </div>
            </div>
            <Navigation
                positions={{ left: "/second", right: "/fourth" }}
                data={data}
                checkboxValid={checkboxValid}
                setCheckboxValid={setCheckboxValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />
        </>
    )
}

export default memo(Third)