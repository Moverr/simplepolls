import React, { Component } from 'react';
import '../css/polling.css';
import Candidate from './Candidate';



class polls extends Component {

    constructor(props) {
        super(props);
        this.state = {
            electioncandidates: null,
            counter: 1
        };

        this.loadCandidate = this.loadCandidate.bind(this);

        this.cleanList = this.cleanList.bind(this);

    }

    componentDidMount() {
        //fetch from server 
        fetch('https://api.newvisionapp.com/v1/ElectoralCandidates?limit=1000')
            .then(response => response.json())
            .then(data => {
                this.setState({ electioncandidates: data });

            });



    }

    render() {
        let polldata = this.state.electioncandidates;
        return (
            <div className="wrapper">
                {this.loadPolls(polldata)}
               


            </div>
        );
    }


    loadPolls(polldata) {


        let pollas = Array();
        if (polldata != null) {
             polldata = polldata.map(n => this.cleanList(n));
            
            polldata.sort((a,b)=>b.votes - a.votes)             
            console.log(polldata);
            pollas = polldata.map(n => this.loadCandidate(n));

        }

        // this.setState({polls:pollas})
        return pollas;
    }

    cleanList(candidateprofile) {
        
        if (candidateprofile.votes == undefined) {
            candidateprofile.votes = 0;
            
        }
        return candidateprofile;
    }

    loadCandidate(candidateprofile) {
        //console.log(candidateprofile) 
        
        let res = <div key={candidateprofile.id} className="candidate">
            <img src={candidateprofile.featured_image} />
            <br />
        Votes :  {candidateprofile.votes} <br />
        Percentage :  20 <br />

            <button className={"btn btn-primary"} onClick={() => this.handleCallback(candidateprofile,"+")}  >YA</button>
            <button className={"btn btn-primary"}   onClick={() => this.handleCallback(candidateprofile,"-")} >NO</button>
        </div>



        return res;
    }
    handleCallback(candidateprofile,status) {
        
        let polldata = this.state.polls;
        this.loadPolls(polldata)
        let cn = this.state.counter;
        let l = cn + 1;
        this.setState({counter:l })

        let y = candidateprofile;
        let x = (y.votes == undefined) ? 0 : y.votes;
        let z  = x;
        if(status == "+"){
              z = z + 1;
        }else{
            if(z > 0 ){
                z  = z - 1;
            }
        }
       

        candidateprofile.votes = z;
        //this.state.counter;
        this.loadPolls(polldata)

    }



}

export default polls;
