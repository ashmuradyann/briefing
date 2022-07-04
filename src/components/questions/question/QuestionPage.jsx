import First from "./questions/First"
import Second from "./questions/Second"
import Third from "./questions/Third"
import Fourth from "./questions/Fourth"
import Fifth from "./questions/Fifth"

const Question = ({ progress, setTitle, data, setData }) => {
  
    switch (progress) {
        case 1:
            return <First setTitle={setTitle} data={data} setData={setData} />
        case 2:
            return <Second setTitle={setTitle} data={data} setData={setData} />
        case 3:
            return <Third setTitle={setTitle} data={data} setData={setData} />
        case 4:
            return <Fourth setTitle={setTitle} data={data} setData={setData} />
        case 5:
            return <Fifth setTitle={setTitle} data={data} setData={setData} />
        default:
            return null
    }

}

export default Question