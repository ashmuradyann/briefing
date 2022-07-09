import { memo } from "react"

import Navigation from '../navigation/Navigation'
import TextArea from '../../../styled-components/TextArea/index'

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const Fifth = ({ data, setData, isValid, setIsValid, onFinish, activeIndex, setActiveIndex }) => {

    return (
        <>
            <div className="question__wrapper">
                <div className="input__wrapper">
                    <div className="input_textarea_wrapper">
                        <label>С чего бы начали работу?</label>
                        <div>
                            <TextArea value={data.whereToStart} style={data.whereToStart.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, whereToStart: e.target.value })} />
                            <img style={data.whereToStart.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, whereToStart: ""})}src={closeSvg} alt="closeBtn" />
                            <p>С чего вы планируете начать свою работу в выбранной должности?</p>
                        </div>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Как не надо делать?</label>
                        <div>
                            <TextArea value={data.howNotToDo} style={data.howNotToDo.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, howNotToDo: e.target.value })} />
                            <img style={data.howNotToDo.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, howNotToDo: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Покажите пример плохого, на ваш взгляд, кейса в вашей сфере. Почему вы считаете это провалом?</p>
                        </div>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Как надо делать?</label>
                        <div>
                            <TextArea value={data.howToDo} style={data.howToDo.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, howToDo: e.target.value })} />
                            <img style={data.howToDo.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, howToDo: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Что вы считаете успешным кейсом? Или просто примеры эффективной работы в вашей сфере?</p>
                        </div>
                    </div>
                    <div className="input_textarea_wrapper">
                        <label>Вопросы / пожелания?</label>
                        <div>
                            <TextArea value={data.anyQuestions} style={data.anyQuestions.length !== 0 ? {borderColor: '#000'} : {borderColor: '#75778A'}} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({ ...data, anyQuestions: e.target.value })} />
                            <img style={data.anyQuestions.length !== 0 ? {opacity: 1, pointerEvents: "auto"} : {opacity: 0}} onClick={() => setData({ ...data, anyQuestions: ""})}src={closeSvg} alt="closeBtn" />
                            <p>Возможно, в процессе диалога у вас возникли вопросы или предложения. Напишите сейчас, не держите в себе {";)"}</p>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation
                positions={{ left: "/fourth", right: "/finish" }}
                data={data}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />
        </>
    )
}

export default memo(Fifth)