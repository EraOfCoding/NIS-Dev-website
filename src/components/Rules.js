import React from 'react'
import '../styles/Rules.css'
import Navbar from './Navbar';

class Rules extends React.Component {
    render() {
        return (
            <div>
                <title>Rules | NIS Dev</title>
                <Navbar page="rules"/>
                <div className="rules">
                    <div>
                        <h1>Server rules</h1>
                        <p>R1: Be respectful.</p>
                        <p>R2: Do not spam (allowed only in #spam chat).</p>
                        <p>R3: Use correct channel for correct topic .</p>
                        <p>R4: Don't insult Owner guy/Admins and other members for doing work.</p>
                        <p>R5: Have fun and happy hacking!</p>
                        <hr/>
                        <p>If you have any rule suggestions just ping @Owner guy</p>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Rules;