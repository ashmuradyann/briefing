import { useCallback, memo } from "react"

import TextArea from '../../../styled-components/TextArea/index'
import Navigation from "../navigation/Navigation"

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const Second = ({ data, setData, checkboxValid, setCheckboxValid, onFinish, activeIndex, setActiveIndex }) => {

    const handleChange = useCallback((event) => event.target.value.length <= 250 && setData({ ...data, [event.target.name]: event.target.value }), [data, setData])

    const handleDelete = (event) => setData({ ...data, [event.target.name]: "" })

    const textareaData = [
        {
            name: "participated",
            value: data.participated,
            mainQuestion: "В каких проектах вы участвовали?",
            questionDescription: "Расскажите о своём опыте: Какой проект показался вам самым интересным? Чем он так запомнился?"
        },
        {
            name: "failures",
            value: data.failures,
            mainQuestion: "Неудачи в работе",
            questionDescription: "А что на счет неудачных проектов? Какой самый серьёзный провал случался в вашей практике?d"
        },
        {
            name: "ownProjects",
            value: data.ownProjects,
            mainQuestion: "Есть ли у вас собственные проекты?",
            questionDescription: "Блог, сервис, личная раскрученная страница?d"
        },
    ]

    return (
        <>
            <div className="question__wrapper">
                <div className="input__wrapper">
                    {textareaData.map(({ name, value, mainQuestion, questionDescription }) => (
                        <div className="input_textarea_wrapper">
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
                positions={{ left: "/first", right: "/third" }}
                data={data}
                checkboxValid={checkboxValid}
                setCheckboxValid={setCheckboxValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />
        </>
    )
}

export default memo(Second)