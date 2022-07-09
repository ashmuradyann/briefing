import { memo } from "react"

import TextArea from '../../../styled-components/TextArea/index'
import Navigation from "../navigation/Navigation"

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const Second = ({ data, setData, isValid, setIsValid, onFinish, activeIndex, setActiveIndex }) => {

    return (
        <>
            <div className="question__wrapper">
                <div className="input__wrapper">
                    <div className="input_textarea_wrapper">
                        <label>В каких проектах вы участвовали?</label>
                        <div>
                            <TextArea value={data.participated} style={data.participated.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, participated: e.target.value })} />
                            <img style={data.participated.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, participated: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Расскажите о своём опыте: Какой проект показался вам самым интересным? Чем он так запомнился?</p>
                        </div>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Неудачи в работе</label>
                        <div>
                            <TextArea value={data.failures} style={data.failures.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, failures: e.target.value })} />
                            <img style={data.failures.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, failures: ""})}src={closeSvg} alt="closeBtn" />
                            <p>А что на счет неудачных проектов? Какой самый серьёзный провал случался в вашей практике?</p>
                        </div>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Есть ли у вас собственные проекты?</label>
                        <div>
                            <TextArea value={data.ownProjects} style={data.ownProjects.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, ownProjects: e.target.value })} />
                            <img style={data.ownProjects.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, ownProjects: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Блог, сервис, личная раскрученная страница?</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation
                positions={{ left: "/first", right: "/third" }}
                data={data}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />
        </>
    )
}

export default memo(Second)