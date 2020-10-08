import React, { Component } from 'react';
import '../css/polling.css'; 
import Candidate from './Candidate';
 
 

class polls extends Component {

    componentDidMount(){
        alert("Intersting");
    }
    render() {
        return (
            <div className="wrapper">
            <Candidate/>
            <Candidate/>
            <Candidate/>
            <Candidate/>
            
            </div>
        );
    }
}

export default polls;
