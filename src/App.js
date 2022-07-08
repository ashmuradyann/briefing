import { useState, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { useTransition, animated } from 'react-spring'

import Welcome from './components/welcome/Welcome'
import Questions from './components/questions/Questions'
import Finish from './components/finish/Finish'

import './app.css'
import First from './components/questions/question/First'
import Second from './components/questions/question/Second'
import Third from './components/questions/question/Third'
import Fourth from './components/questions/question/Fourth'
import Fifth from './components/questions/question/Fifth'


function App() {

  const prevIndexRef = useRef(-1)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isValid, setIsValid] = useState(false)
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

  const location = useLocation()

  const transitions = useTransition(location, {
    from: {
      opacity: 0.8,
      transform: activeIndex > prevIndexRef.current ? `translateX(100%)` : `translateX(-100%)`
    },
    enter: {
      opacity: 1,
      transform: "translateX(0%)",
    },
    leave: {
      opacity: 0.8,
      transform: activeIndex > prevIndexRef.current ? `translateX(-100%)` : `translateX(100%)`
    },
    onRest: () => {
      prevIndexRef.current = activeIndex;
    }
  })

  return (
    <div className="slides">
      {transitions((props, item) => (
        <animated.div style={props} className="slide">
          <Routes location={item}>
            <Route path="/briefing" element={<Welcome activeIndex={activeIndex} setActiveIndex={setActiveIndex} />} />
            <Route path="/" element={<Questions title="Личные данные" />}>
              <Route path="/first" element={<First
                data={data}
                setData={setData}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />} />
            </Route>
            <Route path="/" element={<Questions title="Опыт работы" />}>
              <Route path="/second" element={<Second
                data={data}
                setData={setData}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />} />
            </Route>
            <Route path="/" element={<Questions title="Самообразование" />}>
              <Route path="/third" element={<Third
                data={data}
                setData={setData}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />} />
            </Route>
            <Route path="/" element={<Questions title="Зарплата" />}>
              <Route path="/fourth" element={<Fourth
                data={data}
                setData={setData}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />} />
            </Route>
            <Route path="/" element={<Questions title="Практика" />}>
              <Route path="/fifth" element={<Fifth
                data={data}
                setData={setData}
                isValid={isValid}
                setIsValid={setIsValid}
                onFinish={onFinish}
                activeIndex={activeIndex}
                setActiveIndex={setActiveIndex} />} />
            </Route>
            <Route path="/finish" element={<Finish />} />
          </Routes>
        </animated.div>
      ))}
    </div>
  )
}

export default App
