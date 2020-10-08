import React, { Component } from 'react';
import '../css/polling.css'; 
import Candidate from './Candidate';
 
 

class polls extends Component {

    constructor(props) {
        super(props);
        this.state = {
			polls: null			 
        };

        this.loadCandidate = this.loadCandidate.bind(this);
        
    }

    componentDidMount(){
         //fetch from server 
         fetch('https://api.newvisionapp.com/v1/ElectoralCandidates?limit=6')
        .then(response => response.json())
        .then(data => {
            this.setState({polls:data});
            console.log(data);
        });
        


    }
    
    render() {
        return (
            <div className="wrapper">
            {this.loadPolls()}
           
            
            </div>
        );
    }

   
    loadPolls() {
        let polldata = this.state.polls;
        let polls = Array();
        if(polldata != null){
            polls = polldata.map(n=>this.loadCandidate(n));
        }
      
        
        return  polls;
    }

    loadCandidate(candidate) {
       // return loadCandidate(n);
       console.log(candidate.id)
       return <Candidate />
    }
   
}

export default polls;
