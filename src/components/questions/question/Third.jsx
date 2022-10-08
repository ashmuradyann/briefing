import { useCallback, memo } from 'react'

import Navigation from '../navigation/Navigation'
import TextArea from '../../../styled-components/TextArea/index'

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const Third = ({ data, setData, checkboxValid, setCheckboxValid, onFinish, activeIndex, setActiveIndex }) => {

    const handleChange = useCallback((event) => event.target.value.length <= 250 && setData({ ...data, [event.target.name]: event.target.value }), [data, setData])

    const handleDelete = (event) => setData({ ...data, [event.target.name]: "" })

    const textareaData = [
        {
            name: "books",
            value: data.books,
            mainQuestion: "Читаете книги?",
            questionDescription: "Расскажите, какие книги прочитали за последний год? Какая из списка понравилась больше всего?"
        },
        {
            name: "courses",
            value: data.courses,
            mainQuestion: "Какие курсы вы проходили в последнее время?",
            questionDescription: "Какие курсы, лекции, марафоны проходили? Может быть, изучали документации или кейсы коллег по цеху?"
        },
        {
            name: "sources",
            value: data.sources,
            mainQuestion: "Какими источниками пользуетесь?",
            questionDescription: "Поделитесь источниками - на какие профессиональные паблики или профили вы подписаны? Блоги, СМИ, сервисы, авторы - всё, что вдохновляет и помогает в личном и профессиональном росте!"
        },
        {
            name: "expectionsIn5Years",
            value: data.expectionsIn5Years,
            mainQuestion: "Кем видите себя через 5 лет?",
            questionDescription: "Мы собираем команду не на 1 день. Поэтому хочется работать с амбициозными людьми, которые жаждут покорять новые горизонты! До какого профессионального уровня вы хотели бы дорасти?"
        }
    ]

    return (
        <>
            <div className="question__wrapper">
                <div className="input__wrapper">
                    {textareaData.map(({ name, value, mainQuestion, questionDescription }, i) => (
                        <div className="input_textarea_wrapper" key={i}>
                            <label>{mainQuestion}</label>
                            <div>
                                <TextArea value={value} name={name} style={value.length !== 0 ? { borderColor: '#000' } : { borderColor: '#75778A' }} placeholder="Ваш ответ" onChange={handleChange} />
                                <img style={value.length !== 0 ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0 }} name={name} onClick={handleDelete} src={closeSvg} alt="closeBtn" />
                                <p>{questionDescription}</p>
                            </div>
                            <p className="length" style={{ margin: '5px 0 0 10px' }}>{value.length}/250</p>
                        </div>
                    ))}
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