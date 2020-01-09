import React from 'react';
import "./About.css";

const AboutMe = () => {
    return (
        <div className="inside-about">
            <div className="inside-about-first">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h1>About Me</h1>
                        <hr />  
                        <div className="about-me-text">
                            <p>Hi, my name is Olga Repnitsyna. I am a hard-working, self-motivated and result-oriented individual looking to expand my knowledge and skills in the Information Technology field. I aspire to be a web developer and enjoy the challenge of learning new technologies. I am dedicated to perfecting existing skills by learning from more professional developers and continuously learn as much as I possibly can about being a software developer.</p>
                            <p>In June 2019 I have completed the George Washington University Bootcamp and got the certificate of Full Stack Web Developer. Since then, I've been learning continuously, worked on the projects, and completed a couple professional websites. I feel confident in my ability to learn more and my ability to work hard. I am especially eager to be a part of the team and to learn new technologies so that I can become a valuable employee and bring success to my future company.</p>
                        </div>
                        <hr />                  
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            <div className="inside-about-second">
                <div className="row">
                    <div className="col-sm-2"></div>
                    <div className="col-sm-8">
                        <h1>Skills</h1>
                        <h5>A few skills that I’ve picked up along the way</h5>
                        <hr />  
                        <div className="about-me-skills">
                            <div className="row">
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/html5.jpg" alt="icon1" />
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/css-icon.png" alt="icon2" />                       
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/nodejs.png" alt="icon1" />
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/js.jpg" alt="icon1" />
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/react.png" alt="icon1" />
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/mongodb.png" alt="icon1" />
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/ajax.png" alt="icon1" />
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/mysql.png" alt="icon1" />
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/git.png" alt="icon1" />
                                </div>
                                <div className="col-sm-2">
                                    <img className="skills" src="./images/bootstrap.png" alt="icon1" />
                                </div>


                            </div>
                        </div>
                        <hr />                  
                    </div>
                    <div className="col-sm-2"></div>
                </div>
            </div>
            
        </div>
    )
}

export default AboutMe
