import React from 'react'
import '../Sidebar/css/index.css'
import Sidebar from '../Sidebar/Sidebar'
import MainQuestion from './MainQuestion';

function index() {
  return (
    <div className='stack-index'>
      <div className='stack-index-content'>
        <Sidebar/>
        <MainQuestion/>
      </div>
    </div>
  )
}

export default index