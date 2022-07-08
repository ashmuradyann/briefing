import { memo } from 'react'
import './questions.scss'
import Progress from './progress/Progress'

import logo from '../../assets/images/mini-logo.png'
import { Outlet } from 'react-router-dom'

const Questions = ({ title }) => {

  return (
    <div className="questions__wrapper">
      <div className="questions__container">
        <div className="questions__title">
          <h1>{title}</h1>
          <div className="progress">
            <div>
              <Progress />
            </div>
            <img src={logo} alt="logo" />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default memo(Questions)