import React from 'react'
import Navbar from "./Navbar";
import '../styles/Error.css'

class Error extends React.Component {
    render() {
        return (
            <div>
                <title>Error | NIS Dev</title>
                <Navbar page="error"/>
                <div className="error">
                    <div>
                        <h1>Oops!</h1>
                        <p>You have achieved comedy while playing with url</p>
                        <p>We couldn't find page that you was looking for</p>
                        <h2>Error 404</h2>
                    </div>
                </div>
            </div>
        );
    }
}

export default Error;