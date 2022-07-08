import { memo } from 'react'
import { RadioGroup, FormControlLabel, Radio } from '@mui/material'

import Navigation from '../navigation/Navigation'
import Input from '../../../styled-components/Input/index'

import './styles.scss'

const First = ({ data, setData, isValid, setIsValid, onFinish, activeIndex, setActiveIndex }) => {

    const radios = ["PR специалист", "SMM менеджер, маркетолог", "Веб-мастер", "Руководитель отдела продаж", "Frontend-разработчик"]

    return (
        <>
            <div className="question__wrapper">
                <div className="input__wrapper">
                    <div className="input_name_wrapper">
                        <label>Как вас зовут?</label>
                        <div>
                            <Input value={data.name} placeholder="напр. Владимир Иванов" onChange={(e) => setData({ ...data, name: e.target.value })} />
                            <p>Достаточно имени и фамилии</p>
                        </div>
                    </div>
                    <div className="input_radio_wrapper">
                        <label>Какая должность интересует?</label>
                        <div>
                            <RadioGroup onChange={(e) => { setData({ ...data, jobType: e.target.value }) }}>
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
                positions={{left: "/briefing", right: "/second"}}
                data={data}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />
        </>
    )
}

export default memo(First)