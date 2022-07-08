import { useState, memo } from 'react'
import { useLocation } from 'react-router-dom'

import ProgressBar from './ProgressBar'

import './progress.scss'

const Progress = () => {

  const location = useLocation()

  switch (location.pathname) {
    case "/first":
      return (
        <>
          <ProgressBar pathname={1} />
          <h2>ШАГ 1/5</h2>
        </>
      )
    case "/second":
      return (
        <>
          <ProgressBar pathname={2} />
          <h2>ШАГ 2/5</h2>
        </>
      )
    case "/third":
      return (
        <>
          <ProgressBar pathname={3} />
          <h2>ШАГ 3/5</h2>
        </>
      )
    case "/fourth":
      return (
        <>
          <ProgressBar pathname={4} />
          <h2>ШАГ 4/5</h2>
        </>
      )
    case "/fifth":
      return (
        <>
          <ProgressBar pathname={5} />
          <h2>ШАГ 5/5</h2>
        </>
      )
    default:
      return null
  }

}

export default memo(Progress)