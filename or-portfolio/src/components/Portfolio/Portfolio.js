import React, { Component, useState } from 'react';
import "./Portfolio.css";
import works from "../../utils/works.json";
import SingleWork from "../SingleWork/SingleWork";
import DetailedPage from "../DetailedPage/DetailedPage";

function Portfolio() {
    const [myWorks, setMyWorks] = useState(works);
   

//     const imageClickHandle = (id) => {
//         console.log("clicked");
//         const workIndex = myWorks.findIndex(work => work.id === id);
//         console.log(workIndex);
//         const workToUpdate = myWorks[workIndex];
//         console.log(workToUpdate);
//         workToUpdate.clicked = !workToUpdate.clicked;
//         console.log(workToUpdate);
// console.log(workToUpdate.clicked);
//         setMyWorks([...myWorks, workToUpdate]);
//         console.log(myWorks);
//         console.log(workToUpdate.clicked);

//     }

    console.log(works);
    
    const showModal = id => {
        console.log("clicked");
        console.log(id);
        const workIndex = myWorks.findIndex(work => work.id === id);
        console.log(workIndex);
        const workToUpdate = myWorks[workIndex];
        console.log(workToUpdate);
        workToUpdate.clicked = !workToUpdate.clicked;
        console.log(workToUpdate);
console.log(workToUpdate.clicked);
        setMyWorks([...myWorks, workToUpdate]);
        console.log(myWorks);
        console.log(workToUpdate.clicked);
    }

    return (
        <div className="inside-portfolio">
            <div className="row1">
                <div className="col-sm-12">
                <h1>Portfolio.</h1>
                <hr />
                </div>
            </div>
            <div className="line">
                            
                {works.map((work) => {
                    return (
                        <div>
                            <button><SingleWork 
                                key={work.title} 
                                id ={work.id} 
                                clicked={work.clicked} 
                                title={work.title} 
                                href={work.href} 
                                image={work.image}
                                click={showModal}
                            /></button>
                            {work.clicked ? null : <DetailedPage 
                                                        id={work.id}
                                                        title={work.title} 
                                                        href={work.href} 
                                                        utilizes={work.utilizes} 
                                                        about={work.about}
                                                        onClose={showModal}/> } 

                        </div>
                    )
                })}
            </div>
            
    </div>
)
    
}

export default Portfolio
// click={imageClickHandle} 

// {work.clicked ? null : <DetailedPage title={work.title} href={work.href} utilizes={work.utilizes} about={work.about}/> } 
