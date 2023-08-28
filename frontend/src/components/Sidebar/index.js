import React from 'react'
import './css/index.css'
import Sidebar from './Sidebar'
import Main from './Main';
import axios from "axios";

function Index() {

  const [questions, setQuestions] = React.useState([]);

  React.useEffect(() => {
    async function getQuestion() {
      await axios.get("/api/question").then((res) => {
        setQuestions(res.data.reverse());
        // console.log(res.data)
      });
    }
    getQuestion();
  }, []);

  return (
    <div className='stack-index'>
      <div className='stack-index-content'>
        <Sidebar/>
        <Main questions={questions} />
      </div>
    </div>
  )
}

export default Index