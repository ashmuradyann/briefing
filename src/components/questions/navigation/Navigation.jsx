import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormControlLabel, Checkbox } from '@mui/material'

import ArrowRight from './ArrowRight'
import ArrowLeft from './ArrowLeft'

import './navigation.scss'

const Navigation = ({ progress, setProgress }) => {

    const [isValid, setIsValid] = useState(null)
    const [warnMessage, setWarnMessage] = useState(null)
    const [leftHover, setLeftHover] = useState(null)
    const [rightHover, setRightHover] = useState(null)

    return (
        <div className="navbar">
            {progress === 5 
                ? <div className="privacy">
                <FormControlLabel onChange={() => setIsValid(!isValid)} control={<Checkbox sx={{
                    '& .MuiSvgIcon-root': {
                      fontSize: 40,
                    },
                  }} />} label={<label>Я принимаю <a href="#">Условия конфиденциальности и обработки персональных данных</a>.</label>} />
                    {warnMessage && !isValid ? <p>Подвердите действие!</p> : null}
                </div>
                : null}
            <div className="navigation">
                <div className="navigation__wrapper">
                    {progress !== 1
                        ? <div className="prev__btn" onClick={() => {
                                setProgress(progress - 1)
                                document.documentElement.scrollTop = 0
                                setLeftHover(false)
                            }}
                            onMouseOver={() => setLeftHover(true)}
                            onMouseLeave={() => setLeftHover(false)}>
                            <ArrowLeft bool={leftHover} />
                            <p>Назад</p>
                        </div>
                        : <Link className="prev__btn" to="/briefing"
                            onMouseOver={() => setLeftHover(true)}
                            onMouseLeave={() => setLeftHover(false)}>
                            <ArrowLeft bool={leftHover} />
                            <p>Назад</p>
                        </Link>
                    }
                    {progress !== 5 
                        ? <div className="next__btn" onClick={() => {
                                setProgress(progress + 1)
                                setRightHover(false)
                                document.documentElement.scrollTop = 0
                            }}
                            onMouseOver={() => setRightHover(true)}
                            onMouseLeave={() => setRightHover(false)}>
                            <p>Следующий шаг</p>
                            <ArrowRight bool={rightHover} />
                        </div>
                        : <Link className="next__btn" to={isValid ? "/finish" : "/questions"}
                            onClick={() => setWarnMessage(true)}
                            onMouseEnter={() => setRightHover(true)}
                            onMouseLeave={() => setRightHover(false)}
                            >
                            <p>Завершить</p>
                            <ArrowRight bool={rightHover} />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigation