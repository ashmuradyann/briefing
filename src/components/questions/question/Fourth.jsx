import { useCallback, memo } from "react"

import Navigation from '../navigation/Navigation'
import TextArea from '../../../styled-components/TextArea/index'

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const Fourth = ({ data, setData, checkboxValid, setCheckboxValid, onFinish, activeIndex, setActiveIndex }) => {

    const handleChange = useCallback((event) => event.target.value.length <= 250 && setData({ ...data, [event.target.name]: event.target.value }), [data, setData])

    const handleDelete = (event) => setData({ ...data, [event.target.name]: "" })

    const textareaData = [
        {
            name: "expectedSalary",
            value: data.expectedSalary,
            mainQuestion: "Желанная",
            questionDescription: "Укажите, пожалуйста, о какой сумме вы мечтаете в данный момент? Т.е. та желанная зарплата, которую вроде и сложно, но вполне реально получать в месяц!"
        },
        {
            name: "comfortableSalary",
            value: data.comfortableSalary,
            mainQuestion: "Комфортная",
            questionDescription: "Какая сумма будет для вас комфортной? Этакая золотая середина..."
        },
        {
            name: "minimumSalaryForLife",
            value: data.minimumSalaryForLife,
            mainQuestion: "Жизненно необходимый минимум",
            questionDescription: "Начальная зарплата, за которую вы готовы работать."
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
                positions={{ left: "/third", right: "/fifth" }}
                data={data}
                checkboxValid={checkboxValid}
                setCheckboxValid={setCheckboxValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />
        </>
    )
}

export default memo(Fourth)