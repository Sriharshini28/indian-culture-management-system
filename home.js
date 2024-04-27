import React from "react";
import './home.css';
import { NavLink } from "react-router-dom";
import backgroundVideo from './images/vid.mp4'; // Import your background video

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};
const contentStyle = {"flex": 1, "padding": "10px"}; // Style for content div

class Home extends React.Component {
    login() {
        window.location.replace("/login");
    }

    learnmore(){
        window.location.replace("/learnmore");
    }

    render() {
        return(
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>INDIAN CULTURE MANAGEMENT SYSTEM</label>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/mobile" className="nav-link">Heritage</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                    <NavLink to="/location" className="nav-link">Location</NavLink>
                    <button className="button" onClick={this.login}>Login</button>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content' style={{position: 'relative'}}>
                    <video autoPlay loop muted playsInline style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1}}>
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                    <div style={contentStyle}>
        <center><h1>INDIAN CULTURE MANAGEMENT SYSTEM</h1></center>
      
                        
                        <p style={{ color: 'black' }}>
  Indian culture is the heritage of social norms and technologies that originated in or are associated with the ethno-linguistically diverse India, pertaining to the Indian subcontinent until 1947 and the Republic of India post-1947. The term also applies beyond India to countries and cultures whose histories are strongly connected to India by immigration, colonisation, or influence, particularly in South Asia and Southeast Asia. India's languages, religions, dance, music, architecture, food, and customs differ from place to place within the country.
</p>
                        <button className="btn learn-more-btn" onClick={this.learnmore}>Learn More</button>
                    </div>
                </div>
                <div className='footer'></div>
            </div>
        );
    }
}

export default Home;