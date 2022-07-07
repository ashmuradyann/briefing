import { useEffect, memo } from "react"
import TextArea from '../../../../styled-components/TextArea/index'

const Second = ({ setTitle, data, setData }) => {

    useEffect(() => {
        setTitle("Опыт работы")
    }, [])

    return (
        <div className="question__wrapper">
            <div className="input__wrapper">
                <div className="input_textarea_wrapper">
                    <label>В каких проектах вы участвовали?</label>
                    <div>
                        <TextArea value={data.participated} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, participated: e.target.value})} />
                        <p>Расскажите о своём опыте: Какой проект показался вам самым интересным? Чем он так запомнился?</p>
                    </div>
                </div>
                <div className="input_textarea_wrapper">
                    <label>Неудачи в работе</label>
                    <div>
                        <TextArea value={data.failures} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, failures: e.target.value})} />
                        <p>А что на счет неудачных проектов? Какой самый серьёзный провал случался в вашей практике?</p>
                    </div>
                </div>
                <div className="input_textarea_wrapper">
                    <label>Есть ли у вас собственные проекты?</label>
                    <div>
                        <TextArea value={data.ownProjects} placeholder="Ваш ответ" border="3px solid" onChange={(e) => setData({...data, ownProjects: e.target.value})} />
                        <p>Блог, сервис, личная раскрученная страница?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Second)