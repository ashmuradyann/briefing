import { memo } from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

import Navigation from '../navigation/Navigation'
import Input from '../../../styled-components/Input/index'

import closeSvg from '../../../assets/icons/Close.svg'

import './styles.scss'

const First = ({ data, setData, checkboxValid, setCheckboxValid, onFinish, activeIndex, setActiveIndex }) => {

    const handleChange = (event) => {
        const { name, value } = event.target
        setData({ ...data, [name]: value })
    }

    const radios = ["PR специалист", "SMM менеджер, маркетолог", "Веб-мастер", "Руководитель отдела продаж", "Frontend-разработчик"]

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
                            <Input value={data.email} name="email" style={data.email.length !== 0 ? { borderColor: '#000' } : { borderColor: '#75778A' }} placeholder="your@email.ru" onChange={handleChange} />
                            <img style={data.email.length !== 0 ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0 }} onClick={() => setData({ ...data, email: "" })} src={closeSvg} alt="closeBtn" />
                            <p>Google, Mail, Yandex, Yahoo</p>
                        </div>
                    </div>
                    <div className="input_name_wrapper" style={{ marginTop: "10px" }}>
                        <label>Номер телефона</label>
                        <div>
                            <Input value={data.phoneNumber} name="phoneNumber" style={data.phoneNumber.length !== 0 ? { borderColor: '#000' } : { borderColor: '#75778A' }} placeholder="+7 XXX XXX XX XX" onChange={handleChange} />
                            <img style={data.phoneNumber.length !== 0 ? { opacity: 1, pointerEvents: "auto" } : { opacity: 0 }} onClick={() => setData({ ...data, phoneNumber: "" })} src={closeSvg} alt="closeBtn" />
                            <p>Номер вашего телефона</p>
                        </div>
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