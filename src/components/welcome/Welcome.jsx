import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import './welcome.scss'
import logo from '../../assets/images/logo.png'
import feedbackLogo from '../../assets/images/feedbackLogo.png'


const Welcome = () => {

    const [toggle, setToggle] = useState(null)

    useEffect(() => {
        setTimeout(() => setToggle((prevToggle) => !prevToggle), 5000);
    }, [toggle])

    return (
        <div className="welcome__wrapper">
            <div className="welcome__container">
                <img className="welcome_logo_phones" src={logo} alt="logo" />
                <div className="welcome">
                    <div className="welcome__text">
                        <h1>Анкета соискателя</h1>
                        <h2>Добро пожаловать! Ты видишь эту страницу, потому что откликался на вакансию в компании Easy-I. Мы внимательно знакомимся с каждой кандидатурой.</h2>
                    </div>
                    <img className="welcome__logo" src={logo} alt="logo" />
                </div>
                <div className="starting">
                    <div className="starting__text">
                        <h2>Чтобы познакомиться поближе, приглашаем заполнить короткую анкету. Это займет не более 15 – 20 минут!</h2>
                        <Link className="start__button" to="/questions">НАЧАТЬ</Link>
                    </div>
                    <div className="feedbackInfo__wrapper">
                        <div className="feedbackInfo">
                            <img src={feedbackLogo} alt="feedbackLogo" />
                            {toggle 
                                ? <h3>Заполни анкету и мы свяжемся с тобой в течение 2-х дней!</h3> 
                                : <h3>Тщательное заполнение
                                    анкеты повышает шансы
                                    успешного собеседования
                                    на <span>40%</span>
                                </h3>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Welcome