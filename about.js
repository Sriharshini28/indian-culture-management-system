import React from "react"
import './about.css';
import { NavLink } from "react-router-dom";
import image4 from './images/image4.jpg'; // Import left image
import image5 from './images/image5.jpg'; // Import right image
import image from './images/image.jpeg';

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};

class About extends React.Component {
    
    render() {
        return (
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>INDIAN CULTURE MANAGEMENT SYSTEM</label>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/mobile" className="nav-link">Heritage</NavLink>
                    <NavLink to="/contact" className="nav-link">Culture</NavLink>
                    <NavLink to="/location" className="nav-link">Location</NavLink>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content'>
                    <div className="about-container">
                        <div className="left-image">
                            <img src={image4} alt="INDIAN CULTURE" />
                        </div>
                        <div className="content-text">
                            <center>
                                <h1>ABOUT </h1>
                            </center>
                            <p>Indian culture is incredibly diverse and rich, shaped by thousands of years of history, various religions, traditions, languages, and customs. Here are some key aspects:</p>
                            <p>Religious Diversity: India is the birthplace of several major religions, including Hinduism, Buddhism, Jainism, and Sikhism. Each religion has its own set of rituals, festivals, and beliefs that contribute to the cultural tapestry of the country.</p>
                            <p>Festivals: India is known for its vibrant and colorful festivals celebrated throughout the year. Diwali, Holi, Eid, Christmas, Durga Puja, and Ganesh Chaturthi are some of the most popular festivals, each celebrated with great enthusiasm and fervor across the country.</p>

                            <h1></h1>
                            <div className="right-image">
                                <img src={image5} alt="INDIAN CULTURE MANAGEMENT SYSTEM" />
                            </div>
                            <p>Indian cuisine is renowned for its variety of flavors, spices, and regional specialties. Each region of India has its own distinct culinary traditions and dishes, influenced by local ingredients and cultural practices.</p>
                            <p>Indian culture, often labelled as a combination of several cultures, has been influenced by a history that is several millennia old, beginning with the Indus Valley Civilization and other early cultural areas. There is specifically evidence for early influences from East and Southeast Asian-derived cultural areas, primarily via Austroasiatic (Mon Khmer) groups during the Neolithic period, on certain cultural and political elements of Ancient India, and which may have arrived together with the spread of rice cultivation from Mainland Southeast Asia. A significant number of ethnic minorities in Eastern India are still speaking Austroasiatic languages, most notably the Munda languages.

Many elements of Indian culture, such as Indian religions, mathematics, philosophy, cuisine, languages, dance, music, and movies have had a profound impact across the Indosphere, Greater India, and the world. The British Raj further influenced Indian culture, such as through the widespread introduction of the English language, and a local dialect developed.</p>
                            <center>
                                <h1></h1>
                            </center>
                            <p></p>
                            <p></p>
                            

                            <center>
                                <h1></h1>
                            </center>
                            <p></p>
                            

                            <center>
                                <h1></h1>
                            </center>
                            <p></p>
                            

                            <center>
                                <h1></h1>
                            </center>
                            <center>
                                <div className="left-image1">
                                    <img src={image} alt="NUTHALAPATI SRI HARSHINI" />
                                </div>
                            </center>
                            

                        
                        
                        </div>
                        
                    </div>
                </div>
                <div className='footer'>
                </div>
            </div>
        );
    }
}

export default About;
