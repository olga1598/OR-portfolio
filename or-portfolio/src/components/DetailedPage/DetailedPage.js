import React, { Component } from 'react';
import "./DetailedPage.css";

export default class Modal extends React.Component {
    render() {
    console.log(this.props);
    console.log(this.props.id);
    return (
        
        <div className="inside-detailed-page" >

            <button onClick={() => this.props.onClose(this.props.id)}>
                X
            </button>

            <h5 className="card-title">{this.props.title}</h5>
                <p className="about">{this.props.about}</p>
            <div className="skills">
                <h6>Utilizes:</h6>
                    <ul>
                        {this.props.utilizes.map((skill) => {
                            return <li key={skill}>{skill}</li>
                        })}
                    </ul>
            </div>
            <a
                href={this.props.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-info"
                >Check it out
            </a>
            <a 
                href="https://github.com/olga1598" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-outline-info">
                <i className="fab fa-github"></i>
                GitHub
            </a>

        </div>

        
    )
    }
}
// export default DetailedPage;
