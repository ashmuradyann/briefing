import './finish.scss'

import logo from '../../assets/images/logo.png'
import fbIcon from '../../assets/icons/vk-icon.png'
import vkIcon from '../../assets/icons/fb-icon.png'
import bbIcon from '../../assets/icons/bb-icon.png'

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
            <a href=""><img src={bbIcon} /></a>
            <a href=""><img src={fbIcon} /></a>
            <a href=""><img src={vkIcon} /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finish