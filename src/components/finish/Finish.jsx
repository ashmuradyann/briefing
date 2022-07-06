import './finish.scss'

import DribbleIcon from './DribbleIcon'
import BehanceIcon from './BehanceIcon'
import FacebookIcon from './FacebookIcon'
import InstagramIcon from './InstagramIcon'
import TelegramIcon from './TelegramIcon'
import VKIcon from './VKIcon'

import logo from '../../assets/images/logo.png'

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
            <div className="h2">
              <h2>А пока вы можете больше узнать о нас по ссылке</h2>
            </div>
            <div className="href">
              <a href="https://easy-i.ru/">https://easy-i.ru/</a>
            </div>
          </div>
          <img className="finish__logo" src={logo} alt="logo" />
        </div>
        <div className="contacts">
          <h2>Наши контакты:</h2>
          <a href="mailto:public@easy-i.ru">public@easy-i.ru</a>
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