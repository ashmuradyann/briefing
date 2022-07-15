import { useState, memo, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

import ArrowRight from './ArrowRight'
import ArrowLeft from './ArrowLeft'

import './navigation.scss'

const Navigation = ({ data, positions, onFinish, checkboxValid, setCheckboxValid, activeIndex, setActiveIndex, emailWarnMessage, phoneNumberWarnMessage }) => {

    const location = useLocation()

    const [leftHover, setLeftHover] = useState(null)
    const [rightHover, setRightHover] = useState(null)

    useEffect(() => {
        setCheckboxValid(false)
    }, [])

    return (
        <div className="navbar">
            {location.pathname === "/fifth"
                ? <div className="privacy">
                    <div>
                        <label>
                            <input type="checkbox" onChange={(e) => setCheckboxValid(!checkboxValid)} />
                            <span className="fake"></span>
                            <span>
                                Я принимаю &nbsp;
                                <a href="#">
                                    Условия конфиденциальности и обработки персональных данных.
                                </a>
                            </span>
                        </label>
                    </div>
                </div>
                : null}
            <div className="navigation">
                <div className="navigation__wrapper">
                    <Link className="prev__btn" to={positions.left}
                        onClick={() => {
                            setLeftHover(false)
                            setActiveIndex(activeIndex - 1)
                            document.documentElement.scrollTop = 0
                        }}
                        onMouseOver={() => setLeftHover(true)}
                        onMouseLeave={() => setLeftHover(false)}>
                        <ArrowLeft bool={leftHover} />
                        <p>Назад</p>
                    </Link>
                    <Link style={data.name.length !== 0
                        && data.email.length !== 0
                        && !emailWarnMessage
                        && data.phoneNumber.length !== 0
                        && !phoneNumberWarnMessage
                        && data.jobType.length !== 0
                        ? checkboxValid !== true && location.pathname === "/fifth"
                            ? { pointerEvents: "none", backgroundColor: "#dedede", borderColor: "#dedede" }
                            : null
                        : { pointerEvents: "none", backgroundColor: "#dedede", borderColor: "#dedede" }}
                        className="next__btn" to={positions.right}
                        onClick={() => {
                            if (location.pathname === "/fifth") {
                                onFinish()
                            }
                            document.documentElement.scrollTop = 0
                            setRightHover(false)
                            setActiveIndex(activeIndex + 1)
                        }}
                        onMouseEnter={() => setRightHover(true)}
                        onMouseLeave={() => setRightHover(false)}
                    >
                        <p>{location.pathname !== "/fifth" ? "Следующий шаг" : "Завершить"}</p>
                        <ArrowRight bool={rightHover} />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default memo(Navigation)