import { useState, memo } from 'react'
import { Link } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

import './welcome.scss'
import logo from '../../assets/images/logo.png'
import feedbackLogo from '../../assets/images/feedbackLogo.png'


const Welcome = ({ activeIndex, setActiveIndex }) => {

    const [toggle, set] = useState(false)
    const transitions = useTransition(toggle, {
        from: { position: 'absolute', opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        reverse: toggle,
        delay: 2000,
        onRest: () => set(!toggle),
    })

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
                        <Link className="start__button" to="/first" onClick={() => setActiveIndex(activeIndex + 1)}>НАЧАТЬ</Link>
                    </div>
                    <div className="feedbackInfo__wrapper">
                        {transitions(({ opacity }, item) =>
                            item ? (
                                <animated.div
                                    className="feedbackInfo"
                                    style={{
                                        position: 'absolute',
                                        left: "65%",
                                        right: "3%",
                                        opacity: opacity.to({ range: [0.0, 1.0], output: [0, 1] }),
                                    }}>
                                    <img src={feedbackLogo} alt="feedbackLogo" />
                                    <h3>Заполни анкету и мы свяжемся с тобой в течение 2-х дней!</h3>
                                </animated.div>
                            ) : (
                                <animated.div
                                className="feedbackInfo"
                                style={{
                                        position: 'absolute',
                                        left: "65%",
                                        right: "3%",
                                        opacity: opacity.to({ range: [1.0, 0.0], output: [1, 0] }),
                                    }}>
                                    <img src={feedbackLogo} alt="feedbackLogo" />
                                    <h3>Тщательное заполнение
                                        анкеты повышает шансы
                                        успешного собеседования
                                        на <span>40%</span>
                                    </h3>
                                </animated.div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default memo(Welcome)