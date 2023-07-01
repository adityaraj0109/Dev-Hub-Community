import { Public, Stars, Work } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'
import './css/Sidebar.css'

function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar-container'>
        <div className='sidebar-options'>

          <div className='sidebar-option'>
            <Link to='/'>HOME</Link>
          </div>

          <div className='sidebar-option'>
            <p>PUBLIC</p>
            <div className='link'>
              <div className='link-tag'>
                <Public/>
                <Link>Question</Link>
              </div>
              <div className='tags'>
                <p>Tags</p>
                <p>Users</p>
              </div>
            </div>
          </div>

          {/* <div className='sidebar-option'>
            <p>COLLECTIVES</p>
            <div className='link'>
              <div className='link-tag'>
                <Stars/>
                <Link>Explore Collectives</Link>
              </div>
            </div>
          </div>

          <div className='sidebar-option'>
            <p>FIND A JOB</p>
            <div className='link'>
              <div className='tags'>
                <p>Jobs</p>
                <p>Companies</p>
              </div>
            </div>
          </div>

          <div className='sidebar-option'>
            <p>TEAMS</p>
            <div className='link'>
              <div className='link-tag'>
                <Work/>
                <Link>Companies</Link>
              </div>
            </div>
          </div> */}

        </div>
      </div>
    </div>
  )
}

export default Sidebar