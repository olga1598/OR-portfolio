import React from 'react';
import "./Contacts.css";

const Contacts = () => {
    return (
        <div className="inside-contact-me">
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <h1>Contact Me</h1>    
                    <hr />
                    <div className="all-contacts">
                        <div className="row">
                            <div className="col-sm-1"></div>
                            <div className="col-sm-2">
                                <a className="contacts" href="https://github.com/olga1598" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"></i>GitHub</a>        
                            </div>
                            <div className="col-sm-2">
                                <a className="contacts" href="https://www.linkedin.com/in/olga-repnitsyna-9678b3175/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"></i>LinkedIn</a>
                            </div>
                            <div className="col-sm-2">
                                <a className="contacts" href="mailto:olga.repnitsyna@gmail.com"><i class="far fa-envelope"></i>Email</a>
                            </div>
                            <div className="col-sm-4">
                                <a className="contacts" href="https://1drv.ms/w/s!ApWhhxS_JNJMmpFcmoD6FqgSAI_0xg?e=HRT9bB" target="_blank"><i class="far fa-file-alt"></i>Download Resume</a>
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
                <div className="col-sm-2"></div>
            </div>

            
        </div>
    )
}

export default Contacts
