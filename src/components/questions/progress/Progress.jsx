import { memo } from 'react'
import ProgressBar from './ProgressBar'

import './progress.scss'

const Progress = ({ progress }) => {
  return (
    <>
        <ProgressBar progress={progress} />
        <h2>ШАГ {progress}/5</h2>
    </>
  )
}

export default memo(Progress)