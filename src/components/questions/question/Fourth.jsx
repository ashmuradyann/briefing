import { memo } from "react"

import Navigation from '../navigation/Navigation'
import TextArea from '../../../styled-components/TextArea/index'

import './styles.scss'

const Fourth = ({ data, setData, isValid, setIsValid, onFinish, activeIndex, setActiveIndex }) => {

    return (
        <>
            <div className="question__wrapper">
                <div className="input__wrapper">
                    <div className="input_textarea_wrapper">
                        <label>Желанная</label>
                        <div>
                            <TextArea value={data.expectedSalary} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, expectedSalary: e.target.value })} />
                            <p>Укажите, пожалуйста, о какой сумме вы мечтаете в данный момент? Т.е. та желанная зарплата, которую вроде и сложно, но вполне реально получать в месяц!</p>
                        </div>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Комфортная?</label>
                        <div>
                            <TextArea value={data.comfortableSalary} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, comfortableSalary: e.target.value })} />
                            <p>Какая сумма будет для вас комфортной? Этакая золотая середина...</p>
                        </div>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Жизненно необходимый минимум</label>
                        <div>
                            <TextArea value={data.minimumSalaryForLife} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, minimumSalaryForLife: e.target.value })} />
                            <p>Начальная зарплата, за которую вы готовы работать.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation
                positions={{ left: "/third", right: "/fifth" }}
                data={data}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />
        </>
    )
}

export default memo(Fourth)