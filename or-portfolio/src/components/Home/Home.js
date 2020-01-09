import React from 'react';
import "./Home.css"

const Home = () => {
    return (
        <div className="inside-home">
            <div className="added-space"></div>
            <div className="row">
                <div className="col-sm-2"></div>
                <div className="col-sm-8">
                    <div className="profile-pic">
                        <img src="./images/avatar.jpg" alt="profile-picture" />
                    </div>
                    <hr />
                    <h1>Olga Repnitsyna</h1>
                    <h4>Full Stack Web developer</h4>
                    <hr />
                </div>
                <div className="col-sm-2"></div>
            </div>
        </div>

    )
}

export default Home
