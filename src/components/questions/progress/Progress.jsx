import ProgressBar from './ProgressBar'

import './progress.scss'

const Progress = ({ progress }) => {
  return (
    <div className="progress">
        <ProgressBar progress={progress} />
        <h2>ШАГ {progress}/5</h2>
    </div>
  )
}

export default Progress