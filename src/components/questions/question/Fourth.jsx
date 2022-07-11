import { memo } from "react"

import Navigation from '../navigation/Navigation'
import TextArea from '../../../styled-components/TextArea/index'

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const Fourth = ({ data, setData, checkboxValid, setCheckboxValid, onFinish, activeIndex, setActiveIndex }) => {

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
                        <label>Желанная</label>
                        <div>
                            <TextArea value={data.expectedSalary} name="expectedSalary" style={data.expectedSalary.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" onChange={handleChange} />
                            <img style={data.expectedSalary.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, expectedSalary: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Укажите, пожалуйста, о какой сумме вы мечтаете в данный момент? Т.е. та желанная зарплата, которую вроде и сложно, но вполне реально получать в месяц!</p>
                        </div>
                        <p className="length" style={{margin: '5px 0 0 10px'}}>{data.expectedSalary.length}/250</p>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Комфортная?</label>
                        <div>
                            <TextArea value={data.comfortableSalary} name="comfortableSalary" style={data.comfortableSalary.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" onChange={handleChange} />
                            <img style={data.comfortableSalary.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, comfortableSalary: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Какая сумма будет для вас комфортной? Этакая золотая середина...</p>
                        </div>
                        <p className="length" style={{margin: '5px 0 0 10px'}}>{data.comfortableSalary.length}/250</p>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Жизненно необходимый минимум</label>
                        <div>
                            <TextArea value={data.minimumSalaryForLife} name="minimumSalaryForLife" style={data.minimumSalaryForLife.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" onChange={handleChange} />
                            <img style={data.minimumSalaryForLife.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, minimumSalaryForLife: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Начальная зарплата, за которую вы готовы работать.</p>
                        </div>
                        <p className="length" style={{margin: '5px 0 0 10px'}}>{data.minimumSalaryForLife.length}/250</p>
                    </div>
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