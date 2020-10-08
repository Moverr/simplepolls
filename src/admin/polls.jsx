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
        this.handleCallback = this.handleCallback.bind(this);
        
    }

    componentDidMount(){
         //fetch from server 
         fetch('https://api.newvisionapp.com/v1/ElectoralCandidates?limit=1000')
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

    loadCandidate(candidateprofile) {
       // return loadCandidate(n);
       console.log(candidateprofile.id)
       return <Candidate  img={candidateprofile.featured_image}  id={candidateprofile.id}  callback={this.handleCallback}/>
    }
    handleCallback(candidateprofile,vote,votestatus){
        alert("pass")
    }
   
}

export default polls;
