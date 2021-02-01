import React, {Component} from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component{
    render(){
        return(
            <nav>
            <div className="Container">
                <ul>
                    <li><Link to="/">Home</Link></li>
                </ul>
            </div>
            </nav>
        )
    }
}
export default Navbar