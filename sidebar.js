import React from 'react'

const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="menu">
        <h3>Main Content</h3>
        <ul>
          <br></br>
          <li>
            <a href="#download">Download And Install</a>
          </li>
          <br></br>
          <li>
            <a href="#install">Install Packages</a>
          </li>
          <br></br>
          <li>
            <a href="#start">Start Server</a>
          </li>
          <br></br>
          <li>
            <a href="#browse">Browse Website</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar;