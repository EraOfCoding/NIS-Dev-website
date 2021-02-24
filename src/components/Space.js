import React from 'react'
import '../styles/Space.css'

class Space extends React.Component {
    render() {
        return (           
            <div className="space">
                <div>
                    <h1>NIS Dev</h1>
                    <h2>Become a developer</h2>
                    <h3>Made with ❤️ by <a onClick={() => window.open('https://github.com/EraOfCoding', '_blank')}>Yerassyl</a></h3>
                </div>
            </div>
        );
    }
}

export default Space;