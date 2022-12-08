import React from 'react'
import '../styles/About.css'
import me from '../images/me.jpg'
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
                        <img src={me}/>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default About;
