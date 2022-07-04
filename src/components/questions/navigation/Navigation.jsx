import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormControlLabel, Checkbox } from '@mui/material'

import next from '../../../assets/images/next.png'
import prev from '../../../assets/images/prev.png'

import './navigation.scss'

const Navigation = ({ progress, setProgress, data }) => {

    const [isValid, setIsValid] = useState(null)
    const [warnMessage, setWarnMessage] = useState(null)
    console.log(isValid)

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
                        ? <div className="prev__btn" onClick={() => setProgress(progress - 1)}>
                            <img src={prev} alt="prev-btn" />
                            <p>Назад</p>
                        </div>
                        : <Link className="prev__btn" to="/">
                            <img src={prev} alt="prev-btn" />
                            <p>Назад</p>
                        </Link>
                    }
                    {progress !== 5 
                        ? <div className="next__btn" onClick={() => setProgress(progress + 1)}>
                            <p>Следующий шаг</p>
                            <img src={next} alt="next-btn" />
                        </div>
                        : <Link className="next__btn" to={isValid ? "/finish" : "/questions"} onClick={() => setWarnMessage(true)}>
                            <p>Завершить</p>
                            <img src={next} alt="next-btn" />
                        </Link>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navigation