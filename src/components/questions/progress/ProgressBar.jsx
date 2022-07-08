

const ProgressBar = ({ pathname }) => {

    switch (pathname) {
        case 1:
            return (
                <div className="progress__wrapper">
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar empty"></div>
                    <div className="progress__bar empty"></div>
                    <div className="progress__bar empty"></div>
                    <div className="progress__bar empty"></div>
                </div>
            )
        case 2:
            return (
                <div className="progress__wrapper">
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar empty"></div>
                    <div className="progress__bar empty"></div>
                    <div className="progress__bar empty"></div>
                </div>
            )
        case 3:
            return (
                <div className="progress__wrapper">
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar empty"></div>
                    <div className="progress__bar empty"></div>
                </div>
            )
        case 4:
            return (
                <div className="progress__wrapper">
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar empty"></div>
                </div>
            )
        case 5:
            return (
                <div className="progress__wrapper">
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                    <div className="progress__bar filled"></div>
                </div>
            )
        default:
            return null
    }
}

export default ProgressBar