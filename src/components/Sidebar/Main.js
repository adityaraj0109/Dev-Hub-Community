import { FilterList } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import Question from './Question'
import './css/Main.css'

function Main() {
  return (
    <div className='main'>
        <div className='main-container'>
            <div className='main-top'>
                <h2>All Questions</h2>
                <Link to='add-question'>
                <button>Ask Question</button>
                </Link>
            </div>
            <div className='main-desc'>
                <p> All question stat</p>
                <div className='main-filter'>
                    <div className='main-tabs'>
                        <div className='main-tab'>
                            <Link>Newest</Link>
                        </div>
                        <div className='main-tab'>
                            <Link>Active</Link>
                        </div>
                        <div className='main-tab'>
                            <Link>More</Link>
                        </div>
                    </div>
                    <div className='main-filter-item'>
                            <FilterList/>
                            <p>Filter</p>
                    </div>
                </div>
            </div>
            <div className='questions'>
                <div className='question'>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                    <Question/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main