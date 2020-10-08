import React, { Component } from 'react';
import '../css/polling.css'; 
import Candidate from './Candidate';
 
 

class polls extends Component {

    constructor(props) {
        super(props);
        this.state = {
			polls: null			 
        };
        
    }

    componentDidMount(){
         //fetch from server 
         fetch('https://api.newvisionapp.com/v1/ElectoralCandidates?limit=6')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
        


    }
    
    render() {
        return (
            <div className="wrapper">
            {this.loadPolls()}
            <Candidate/>
            <Candidate/>
            <Candidate/>
            
            </div>
        );
    }

    loadPolls() {
        let polls = Array();
        polls.push(<Candidate />);
        polls.push(<Candidate />);
        polls.push(<Candidate />);
        return  polls;
    }
}

export default polls;
