import React from 'react'
import '../styles/Space.css'

class Space extends React.Component {
    constructor(props) {
        super()
        this.state = {
            update_data: props.update_data
        }
    }
    render() {
        return (           
            <div className="space">
                <div>
                    <h1>NIS Dev</h1>
                    <h2>Become a developer</h2>
                    <h3>Last update: {this.state.update_data}</h3>
                </div>
            </div>
        );
    }
}

export default Space;