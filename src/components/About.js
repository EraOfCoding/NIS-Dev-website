import React from 'react'
import '../styles/About.css'
import Boribay from '../images/Boribay.png'
import Navbar from './Navbar';

class About extends React.Component {
    state = {  }
    render() {
        return (
            <div>
                <title>About | NIS Dev</title>
                <Navbar page="about"/>
                <div className="about">
                    <div>
                        <h1>About website</h1>
                        <p>Website was created using React by Yerassyl.</p>
                        <p> If you have any questions or suggestions just DM me. @Yerassyl, @Owner guy</p>
                        <hr/>                  
                        <div className="btns">
                            <button onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=735397931355471893&permissions=8&scope=bot')} id="invite">Invite</button>
                            <button onClick={() => window.open('https://top.gg/bot/735397931355471893')} id="info">Info</button>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default About;
