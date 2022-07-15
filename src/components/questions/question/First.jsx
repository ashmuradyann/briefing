import { useState, useCallback, memo } from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

import Validator from 'email-validator'

import Navigation from '../navigation/Navigation'
import Input from '../../../styled-components/Input/index'

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const First = ({ data, setData, checkboxValid, setCheckboxValid, onFinish, activeIndex, setActiveIndex }) => {

    const radios = ["PR специалист", "SMM менеджер, маркетолог", "Веб-мастер", "Руководитель отдела продаж", "Frontend-разработчик"]

    const [emailWarnMessage, setEmailWarnMessage] = useState(null)
    const [phoneNumberWarnMessage, setPhoneNumberWarnMessage] = useState(null)

    const handleChange = useCallback((event) => setData({ ...data, [event.target.name]: event.target.value}), [data, setData])
    
    const phoneNumberHandleChange = (event) => {
        if(event.target.value.length !== 13) {
            setData({...data, phoneNumber: "+7" + event.target.value.replaceAll("+7", "").replace(/[^+\d]/g, '')})
        }
        setTimeout(() => {
            if(event.target.value.length < 12) {
                setPhoneNumberWarnMessage(true)
            }
        }, 1000)
        setPhoneNumberWarnMessage(false)
    }

    const emailHandleChange = (event) => {
            setData({...data, email: event.target.value})
            setTimeout(() => {
                if(!Validator.validate(event.target.value) && event.target.value.length !== 0) {
                    setEmailWarnMessage(true)
                }
            }, 1000)
            setEmailWarnMessage(false)
    }

    return (
        <>
            <div className="question__wrapper">
                <div className="input__wrapper">
                    <div className="input_name_wrapper">
                        <label>Как вас зовут?</label>
                        <div>
                            <Input value={data.name} name="name" style={data.name.length !== 0 ? { borderColor: '#000' } : { borderColor: '#75778A' }} placeholder="напр. Владимир Иванов" onChange={handleChange} />
                            <img style={data.name.length !== 0 ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0 }} onClick={() => setData({ ...data, name: "" })} src={closeSvg} alt="closeBtn" />
                            <p>Достаточно имени и фамилии</p>
                        </div>
                    </div>
                    <div className="input_name_wrapper" style={{ marginTop: "10px" }}>
                        <label>Ваш адрес электронной почты</label>
                        <div>
                            <Input value={data.email} style={data.email.length !== 0 ? { borderColor: '#000' } : { borderColor: '#75778A' }} placeholder="your@email.ru" name="email" onChange={emailHandleChange}/>
                            <img style={data.email.length !== 0 ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0 }} onClick={() => setData({ ...data, email: "" })} src={closeSvg} alt="closeBtn" />
                            <p>Google, Mail, Yandex, Yahoo</p>
                        </div>
                        {emailWarnMessage ? <p style={{color: "#ff0000"}}>Неверный адрес электронной почты</p> : null}
                    </div>
                    <div className="input_name_wrapper" style={{ marginTop: "10px" }}>
                        <label>Номер телефона</label>
                        <div>
                            <Input value={data.phoneNumber !== "+7" ? data.phoneNumber : ""} name="phoneNumber" style={data.phoneNumber.length !== 0 ? { borderColor: '#000' } : { borderColor: '#75778A' }} placeholder="+7 XXX XXX XX XX" onChange={phoneNumberHandleChange} />
                            <img style={data.phoneNumber.length !== 0 ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0 }} onClick={() => setData({ ...data, phoneNumber: "" })} src={closeSvg} alt="closeBtn" />
                            <p>Номер вашего телефона</p>
                        </div>
                        {phoneNumberWarnMessage ? <p style={{color: "#ff0000"}}>Неверный номер телефона</p> : null}
                    </div>
                    <div className="input_checkbox_wrapper">
                        <label>Какая должность интересует?</label>
                        <div>
                            {radios.map((el, i) => (
                                <label>
                                    <input type="checkbox" onChange={(e) => setData({ ...data, jobTypeCheckbox: { ...data.jobTypeCheckbox, [el]: e.target.value } })} />
                                    <span className="fake"></span>
                                    <span>{el}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="input_select_wrapper">
                        <label>Какая должность интересует?</label>
                        <div>
                            <select>
                                <option disabled selected>выберите должность</option>
                                {radios.map((el, i) => (
                                    <option>{el}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className="input_radio_wrapper">
                        <label>Какая должность интересует?</label>
                        <div>
                            <RadioGroup name="jobType" onChange={handleChange}>
                                {radios.map((el, i) => (
                                    <FormControlLabel key={i} value={el} control={<Radio sx={{
                                        '& .MuiSvgIcon-root': {
                                            fontSize: 40,
                                        },
                                    }} checked={data.jobType === el} />} label={el} />
                                ))}
                            </RadioGroup>
                        </div>
                    </div>
                </div>
            </div>
            <Navigation
                phoneNumberWarnMessage={phoneNumberWarnMessage}
                emailWarnMessage={emailWarnMessage}
                positions={{ left: "/briefing", right: "/second" }}
                data={data}
                checkboxValid={checkboxValid}
                setCheckboxValid={setCheckboxValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />
        </>
    )
}

export default memo(First)