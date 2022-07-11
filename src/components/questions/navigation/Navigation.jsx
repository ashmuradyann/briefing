import { useState, memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FormControlLabel, Checkbox } from '@mui/material'

import ArrowRight from './ArrowRight'
import ArrowLeft from './ArrowLeft'

import './navigation.scss'

const Navigation = ({ data, positions, onFinish, checkboxValid, setCheckboxValid, activeIndex, setActiveIndex }) => {

    const location = useLocation()

    const [warnMessage, setWarnMessage] = useState(null)
    const [leftHover, setLeftHover] = useState(null)
    const [rightHover, setRightHover] = useState(null)

    return (
        <div className="navbar">
            {location.pathname === "/fifth"
                ? <div className="privacy">
                    <FormControlLabel
                        onChange={() => setCheckboxValid(!checkboxValid)}
                        control={<Checkbox checked={checkboxValid} />}
                        label={
                            <label>
                                Я принимаю
                                <a href="#">
                                    Условия конфиденциальности и обработки персональных данных.
                                </a>
                            </label>}
                    />
                    {warnMessage && !checkboxValid ? <p>Подвердите действие!</p> : null}
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
                        && data.phoneNumber.length !== 0
                        && data.jobType.length !== 0
                        ? checkboxValid !== true && location.pathname === "/fifth"
                            ? { pointerEvents: "none", backgroundColor: "#dedede", borderColor: "#dedede" }
                            : null
                        : { pointerEvents: "none", backgroundColor: "#dedede", borderColor: "#dedede" }}
                        className="next__btn" to={positions.right}
                        onClick={() => {
                            if (location.pathname === "/fifth") {
                                setWarnMessage(true)
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