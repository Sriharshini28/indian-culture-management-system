import React from "react";
import './home1.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";
import image1 from './images/image1.jpg'

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "paddingRight" : "10px"};
const HS3 = {"width": "800px", "height": "700px", "margin": "0 auto"}; // Define HS3 style
const contentStyle1 = {"flex": 1, "padding": "10px"}; // Style for content div

class Home1 extends React.Component {
    constructor()
    {
        super();
        this.sid = getSession("sid");
        //alert(this.sid);
        if(this.sid === "")
            window.location.replace("/");

        var url = "http://localhost:5000/home/uname";
        var data = JSON.stringify({
            emailid : this.sid
        });
        callApi("POST", url, data, this.loadUname, errorResponse);
    }
    loadUname(res)
    {
        var data = JSON.parse(res);
        var HL1 = document.getElementById("HL1");
        HL1.innerText = `${data[0].firstname} ${data[0].lastname}`
    }

    logout()
    {
        setSession("sid", "", -1);
        window.location.replace("/");
    }
    render() {
        return(
            <div className='full-height2'>
                <div className='header2'>
                    <label style={HS1}> INDIAN CULTURE MANAGEMENT SYSTEM</label>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <NavLink to="/home1" className="nav-link">Home</NavLink>
                    <NavLink to="/about1" className="nav-link">About</NavLink>
                    <NavLink to="/state" className="nav-link">States</NavLink>
                    <NavLink to="/changepassword" className="nav-link">Change Password</NavLink>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content2' style={{display: 'flex'}}> 
                    <img src={image1} alt='' style={HS3}/> 
                    <div style={contentStyle1}>
                        <h1>WELCOME TO INDIAN CULTURE MANAGEMENT SYSTEM</h1>
                        <p>The Indian Culture Management System is a platform dedicated to preserving and promoting the rich cultural heritage of India. It provides resources and tools to manage, document, and celebrate various aspects of Indian culture, including festivals, traditions, languages, and arts. Through its diverse offerings, it aims to foster a deeper understanding and appreciation of India's cultural diversity and heritage.</p>
                    </div>
                </div>
                <div className='footer2'>
                    
                </div>
            </div>
        );
    }
}

export default Home1;
