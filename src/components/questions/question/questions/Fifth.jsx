import { useEffect } from "react"
import TextArea from '../../../../styled-components/TextArea/index'

const Fifth = ({ setTitle, data, setData }) => {

    useEffect(() => {
        setTitle("Практика")
    }, [])

    return (
        <div className="question__wrapper">
            <div className="input__wrapper">
                <div className="input_textarea_wrapper">
                    <label>С чего бы начали работу?</label>
                    <div>
                        <TextArea value={data.whereToStart} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, whereToStart: e.target.value})} />
                        <p>С чего вы планируете начать свою работу в выбранной должности?</p>
                    </div>
                </div>
                <div className="input_textarea_wrapper">
                    <label>Как не надо делать?</label>
                    <div>
                        <TextArea value={data.howNotToDo} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, howNotToDo: e.target.value})} />
                        <p>Покажите пример плохого, на ваш взгляд, кейса в вашей сфере. Почему вы считаете это провалом?</p>
                    </div>
                </div>
                <div className="input_textarea_wrapper">
                    <label>Как надо делать?</label>
                    <div>
                        <TextArea value={data.howToDo} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, howToDo: e.target.value})} />
                        <p>Что вы считаете успешным кейсом? Или просто примеры эффективной работы в вашей сфере?</p>
                    </div>
                </div>
                <div className="input_textarea_wrapper">
                    <label>Вопросы / пожелания?</label>
                    <div>
                        <TextArea value={data.anyQuestions} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, anyQuestions: e.target.value})} />
                        <p>Возможно, в процессе диалога у вас возникли вопросы или предложения. Напишите сейчас, не держите в себе {";)"}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fifth