import { useState } from 'react'
import './questions.scss'
import Progress from './progress/Progress'
import QuestionPage from './question/QuestionPage'
import Navigation from './navigation/Navigation'

import logo from '../../assets/images/mini-logo.png'

const Questions = () => {

  const [isValid, setIsValid] = useState(null)
  const [progress, setProgress] = useState(1)
  const [title, setTitle] = useState("")
  const [data, setData] = useState({
    name: "",
    jobType: "",
    participated: "",
    failures: "",
    ownProjects: "",
    books: "",
    courses: "",
    sources: "",
    expectionsIn5Years: "",
    expectedSalary: "",
    comfortableSalary: "",
    minimumSalaryForLife: "",
    whereToStart: "",
    howNotToDo: "",
    howToDo: "",
    anyQuestions: "",
  })

  const onFinish = () => {
    if (isValid) {
      console.log({
        "имя": data.name,
        "должность": data.jobType,
        "проекты в которых участвовал": data.participated,
        "неудачи": data.failures,
        "свои проекты": data.ownProjects,
        "книги": data.books,
        "курсы": data.courses,
        "источники которых использовал": data.sources,
        "он чере 5 лет": data.expectionsIn5Years,
        "желанная зарплата": data.expectedSalary,
        "комфортная зарплата": data.comfortableSalary,
        "минимум зарплата": data.minimumSalaryForLife,
        "с чего бы начал работу": data.whereToStart,
        "как не надо делать": data.howNotToDo,
        "как надо делать": data.howToDo,
        "вопросы/пожелания": data.anyQuestions,
      })
    }
  }

  return (
    <div className="questions__wrapper">
      <div className="questions__container">
        <div>
          <div className="questions__title">
            <h1>{title}</h1>
            <div className="progress">
              <div>
                <Progress progress={progress} />
              </div>
              <img src={logo} alt="logo" />
            </div>
          </div>
          <QuestionPage progress={progress} setTitle={setTitle} data={data} setData={setData} />
        </div>
        <Navigation 
          progress={progress} 
          setProgress={setProgress} 
          data={data} 
          isValid={isValid} 
          setIsValid={setIsValid} 
          onFinish={onFinish} />
      </div>
    </div>
  )
}

export default Questions