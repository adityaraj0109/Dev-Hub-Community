import { Avatar } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/Question.css'

function Question() {
  return (
    <div className='all-questions'>
        <div className='all-ques-container'>
            <div className='all-ques-left'>
                <div className='all-options'>
                    <div className='all-option'>
                        <p>0</p>
                        <span>votes</span>
                    </div>
                    <div className='all-option'>
                        <p>0</p>
                        <span>answers</span>
                    </div>
                    <div className='all-option'>
                        <small>0 views</small>
                    </div>
                </div>
            </div>
            <div className='ques-ans'>
                <Link to="/question">How to use drag and drop in any design?</Link>
                <div style={{width:"90%"}}>
                    <div>
                        This is the ans that i am getting when i ask my doubt on this platform.
                    </div>
                </div>
                <div style={{display:"flex"}}>
                    <span className='ques-tags'>
                        react
                    </span>
                    <span className='ques-tags'>
                        web development
                    </span>
                    <span className='ques-tags'>
                        frontend
                    </span>
                </div>
                <div className='author'>
                    <small>Timestamp</small>
                    <div className='author-details'>
                        <Avatar/>
                        <p>User Name</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Question