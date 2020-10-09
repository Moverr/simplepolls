import React,{Component}  from 'react';
import { Button } from 'react-bootstrap';

 

function Candidate(candidateprofile){
    
    let perce = isNaN(candidateprofile.percentage) ? 0 : Math.round(candidateprofile.percentage, 2);

    let res = <div key={candidateprofile.id} className="candidate">

        <img src={candidateprofile.featured_image} />
        <br />
        Votes: {candidateprofile.votes} <br />
        Percentage: {perce}% <br />

        <button className={"btn btn-primary"} onClick={() => this.handleCallback(candidateprofile, "+")}>YA</button>
        <button className={"btn btn-primary"} onClick={() => this.handleCallback(candidateprofile, "-")}>NO</button>
    </div>;
    return res;
}
export default Candidate;


 