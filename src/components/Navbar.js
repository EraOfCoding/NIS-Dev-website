import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super()
        this.state = {
            page: props.page
        }
    }
    tmp() {
        console.log(' NIS Developers ')
    }
    render() {
        return (
            <div className="navbar">
                <div className="img-c">
                    <Link to="/">
                        <h1>NIS Developers</h1>
                    </Link>
                </div>
                <div className="navbar-container">
                    <div className="navbar-buttons">
                        <div>
                            <Link to="/">
                                <h3 className={this.state.page == "home" ? "home-btn-super" : "home-btn"}>HOME</h3>
                            </Link>
                            <Link to="/rules">
                                <h3 className={this.state.page == "rules" ? "rules-btn-super" : "rules-btn"}>RULES</h3>
                            </Link>
                            <Link to="/about">
                                <h3 className={this.state.page == "about" ? "about-btn-super" : "about-btn"}>ABOUT</h3>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            
            
        );
    }
}

export default Navbar;