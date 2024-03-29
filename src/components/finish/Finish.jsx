import './finish.scss'

import DribbleIcon from './icons/DribbleIcon'
import BehanceIcon from './icons/BehanceIcon'
import FacebookIcon from './icons/FacebookIcon'
import InstagramIcon from './icons/InstagramIcon'
import TelegramIcon from './icons/TelegramIcon'
import VKIcon from './icons/VKIcon'

const Finish = () => {
  return (
    <div className="finish__wrapper">
      <div className="finish__container">
        <div className="finish">
          <div className="finish__text">
            <h1>Готово!</h1>
            <div className="h2">
              <h2>Спасибо! Мы получили вашу анкету и постараемся ответить в течение 3-х рабочих дней.</h2>
            </div>
          </div>
        </div>
        <div className="contacts">
          <h2>Наши контакты:</h2>
          <div className="icons">
            <a href="#"><DribbleIcon /></a>
            <a href="#"><BehanceIcon /></a>
            <a href="#"><FacebookIcon /></a>
            <a href="#"><InstagramIcon /></a>
            <a href="#"><TelegramIcon /></a>
            <a href="#"><VKIcon /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finish