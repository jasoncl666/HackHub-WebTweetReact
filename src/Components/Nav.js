import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Nav extends Component {

    // state = {
    //     token: "1"
    // }

    render() {

        const {
            logo,
            handleLogout
        } = this.props

        return (
            <nav className="nav-bar">
                <div className="container nav-container">
                    <ul>
                        <li><Link to="/"><img className="logo" src={logo} alt="webdxd" /></Link></li>
                        <li><Link to="/">Home</Link></li>
                        {this.props.token? <li onClick={handleLogout}>Logout</li> : <li><Link to="/signup">Signup</Link></li> }
                    </ul>
                    <div>
                        <a href="profile.html"><img className="avatar-sm" src={logo} alt="avatar" /></a>
                        {/* Remember to close image tag */}
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;