import React from "react";
import './about1.css';
import { callApi, errorResponse, getSession, setSession } from './main';
import { NavLink } from "react-router-dom";
import image4 from './images/image4.jpg'; // Import left image
import image5 from './images/image5.jpg'; // Import right image

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS2 = {"float" : "right", "padding-right" : "5px", "cursor" : "pointer"};
const HS4 = {"float" : "right", "paddingRight" : "10px"};
const contentStyle1 = {"flex": 1, "padding": "10px"}; // Style for content div

class About1 extends React.Component {
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
            <div className='full-height3'>
                <div className='header3'>
                    <label style={HS1}>INDIAN CULTURE MANAGEMENT SYSTEM</label>
                    <label style={HS2} onClick={this.logout}>Logout</label>
                    <NavLink to="/home1" className="nav-link">Home</NavLink>
                    <NavLink to="/about1" className="nav-link">About</NavLink>
                    <NavLink to="/changepassword" className="nav-link">Change Password</NavLink>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content3' style={{display: 'flex'}}> 
                    <div style={contentStyle1}>
                    <div className="about-container">
                        <div className="left-image3">
                            <img src={image4} alt="INDIAN CULTURE MANAGEMENT SYSTEM" />
                        </div>
                        <div className="content-text">
                            <center>
                                <h1>ABOUT US</h1>
                            </center>
                            <p>The Indian Culture Management System is a platform dedicated to preserving and promoting the rich cultural heritage of India. It provides resources and tools to manage, document, and celebrate various aspects of Indian culture, including festivals, traditions, languages, and arts. Through its diverse offerings, it aims to foster a deeper understanding and appreciation of India's cultural diversity and heritage.</p>

                            <h1>Mission Statement</h1>
                            <div className="right-image3">
                                <img src={image5} alt="INDIAN CULTURE MANAGEMENT SYSTEM" />
                            </div>
                            <p>The mission of the Indian Culture Management System is to safeguard and propagate India's diverse cultural heritage through innovative digital solutions, fostering cultural preservation and awareness globally.</p>
                            <center>
                                <h1>Get involved</h1>
                            </center>
                            <p>Join us in our mission to modernize elections and promote democratic participation. Whether you're a voter, election administrator, or technologist, there are opportunities to get involved and contribute to the success of OVMS. Contact us to learn more about partnership opportunities, volunteer programs, or career opportunities with OVMS.</p>
                            
                            <div className="left-image3">
                                <img src={image5} alt="INDIAN CULTURE MANAGEMENT SYSTEM" />
                            </div>
                            <center>
                                <h1>MISSION STATEMENT</h1>
                            </center>
                            <p>The mission of the Indian Culture Management System is to safeguard and propagate India's diverse cultural heritage through innovative digital solutions, fostering cultural preservation and awareness globally.</p>
                            

                            <center>
                                <h1>OUR FOCUS</h1>
                            </center>
                            <p>The main focus of the Indian Culture Management System is to digitally document, preserve, and promote India's rich cultural heritage. It aims to provide accessible platforms for cultural education, research, and appreciation. Additionally, fostering collaborations with cultural institutions and communities to ensure the sustainable management and dissemination of cultural knowledge is a key focus. The system also emphasizes leveraging technology to enhance cultural experiences and engagement for diverse audiences.</p>
                            <center>
                                <h1>Contact Us</h1>
                            </center>
                            <p>For inquiries, feedback, or support, please contact our team at contact@ovms.com. We welcome your questions and suggestions as we work together to build a better future for indian cultures.</p>
                         </div>
                        </div>
                    </div>
                </div>
                
            </div>
           
        );
    }
}

export default About1;
