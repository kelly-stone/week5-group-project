import React from 'react'
import {Link} from 'react-router-dom'


class Nav extends React.Component {
    constructor(props) {
        super(props)
        }
    

    render() {
    return (
    <nav className="navbar grid">
              <p className="navbar-item"><Link to={`/movies/`}>Jobs</Link></p>
              <p className="navbar-item"><Link to={`/movies/addMovie`}>Add Job</Link></p>
              <p className="navbar-item"><Link to={`/`}>About</Link></p>        
    </nav>
  )
}
}


export default Nav