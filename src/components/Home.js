import React from 'react'
import '../styles/Home.css'
import nis_dev from '../images/nis_dev.png'
import Navbar from './Navbar';

class Home extends React.Component {

    render() {
        return (
            <div>
                <title>Home | NIS Dev</title>
                <Navbar page="home"/>
                <div className="home">
                    <div className="join">
                        <img src={nis_dev}/>
                        <div>
                            <h1>Become NIS developer</h1>
                            <p>Join to NIS Developers discord server and become part of our community.</p>
                            <button onClick={() => window.open("https://discord.gg/5QFteFzMn4", "_blank")}>JOIN</button>
                        </div>
                    </div> 
                    <div className="learn">
                        <div>
                            <h1>Learn programming</h1>
                            <p>In NIS dev you can meet a lot of developers and learn bunch of things</p>
                        </div>
                        <img src="https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif"/>
                        {/* <iframe width="360" height="205" src="https://www.youtube.com/embed/PkZNo7MFNFg" 
                        frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                        gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                    </div>
                    <div className="info">
                        <div>
                            <h1>Friendly community</h1>
                            <p>Don't hesitate asking questions. We are friendly, we will help you</p>
                        </div>
                        <div>
                            <h1>Awesome bots</h1>
                            <p>There are awesome bots in NIS Dev, such as NIS Utilities and Mee6</p>
                        </div>
                        <div>
                            <h1>Active server</h1>
                            <p>Our server is very active. Just ping someone and he will reply in a second</p>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Home;