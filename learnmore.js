import React from "react";
import './learnmore.css';
import { NavLink } from "react-router-dom";
import image2 from './images/image2.jpg'; // Import left image
import image3 from './images/image3.jpg'; // Import right image

const HS1 = { "paddingLeft": "5px", "marginRight": "20px" };
const HS4 = {"float" : "right", "paddingRight" : "10px"};

class Learnmore extends React.Component {
    home(){
        window.location.replace("/");
    }
    render() {
        return (
            <div className='full-height'>
                <div className='header'>
                    <label style={HS1}>INDIAN CULTURE MANAGEMENT SYSTEM</label>
                    <NavLink to="/" className="nav-link">Home</NavLink>
                    <NavLink to="/about" className="nav-link">About</NavLink>
                    <NavLink to="/heritage" className="nav-link">Heritage</NavLink>
                    <NavLink to="/contact" className="nav-link">Contact us</NavLink>
                    <NavLink to="/help" className="nav-link">Help/Support</NavLink>
                    <button className="button" onClick={this.home}>Back to Home</button>
                    <label id='HL1' style={HS4}></label>
                    <div id="header"></div>
                </div>
                <div className='content'>
                    <div className="learn-more-container">
                        <div className="left-image">
                            <img src={image2} alt="INDIAN CULTURE" />
                        </div>
                        <div className="content-text">
                            <h1>Overview of the Indian Culture Management System:</h1>
                            <p>Indian culture management system encompasses a broad spectrum of practices and values that reflect the rich and diverse cultural heritage of India.</p>

                            <h1>Advantages of Indian Management System:</h1>
                            <p>The Indian management system emphasizes cultural sensitivity, relationship building, and adaptability, fostering inclusive leadership and resilience, all of which contribute to effective cross-cultural collaboration and sustainable business practices.</p>

                            <h1>How It Works:</h1>
                            <p>The Indian culture management system values hierarchy, collective decision-making, and relationship building, fostering an inclusive and resilient work environment grounded in cultural sensitivity and adaptability.</p>

                            <h1>Key Features:</h1>
                            <p>Key features of the Indian culture system include:

1. **Diversity**: India is known for its diverse languages, religions, and traditions, contributing to a rich cultural tapestry.
  
2. **Spirituality**: Deep-rooted spiritual beliefs influence daily life, with practices like meditation and yoga widely embraced.

3. **Family-centric**: Family bonds are strong, and familial ties often influence personal and professional decisions.

4. **Hierarchical Structure**: Respect for authority and elders is integral, shaping social and organizational dynamics.

5. **Collectivism**: Group harmony is prioritized over individual pursuits, promoting cooperation and teamwork.

6. **Celebration of Festivals**: Vibrant festivals and traditions are integral to Indian life, fostering community spirit and cultural exchange.

7. **Time Concept**: Time is viewed more fluidly, with importance placed on relationships over strict adherence to schedules.

8. **Hospitality**: Guests are treated with utmost respect and generosity, reflecting the value placed on hospitality and social connections.

9. **Cultural Heritage**: Ancient traditions and practices continue to influence modern life, preserving a sense of continuity and identity.

10. **Adaptability**: India's history of assimilating diverse influences has fostered adaptability and resilience in the face of change.</p>

                            
                            
                            <div className="right-image">
                                <img src={image3} alt="INDIAN CULTURE MANAGEMENT SYSTEM" />
                            </div>
                            <h1>Support and Resources:</h1>
                            <p>We offer comprehensive support channels for users who need assistance. Whether you have questions or require technical support, our team is here to help. Additionally, you can access FAQs, user guides, and contact information for customer support.</p>

                           </div>
                        
                    </div>
                </div>
                <div className='footer'>
                   
                </div>
            </div>
        );
    }
}

export default Learnmore;
