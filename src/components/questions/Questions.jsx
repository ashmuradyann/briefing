import { useState } from 'react'
import './questions.scss'
import Progress from './progress/Progress'
import QuestionPage from './question/QuestionPage'
import Navigation from './navigation/Navigation'

const Questions = () => {

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

  return (
    <div className="questions__wrapper">
      <div className="questions__container">
        <div>
          <div className="questions__title">
            <h1>{title}</h1>
            <div className="progress">
              <Progress progress={progress} />
            </div>
          </div>
          <QuestionPage progress={progress} setTitle={setTitle} data={data} setData={setData} />
        </div>
        <Navigation progress={progress} setProgress={setProgress} data={data} />
      </div>
    </div>
  )
}

export default Questions