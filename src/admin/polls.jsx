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
        this.calculatepercent = this.calculatepercent.bind(this);

    }

    componentDidMount() {
        //fetch from server 
        fetch('https://api.newvisionapp.com/v1/ElectoralCandidates?limit=20')
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

    calculatepercent(candidateprofile,totalvotes){
           let padter =  (candidateprofile.votes/totalvotes) * 100;
            candidateprofile.percentage = padter;
           return candidateprofile;

    }

    loadPolls(polldata) {

        let pollas = Array();
        if (polldata != null) {
            polldata = polldata.map(n => this.cleanList(n));
            let    totalvotes = polldata.reduce(function(prev, cur) {
                return prev + cur.votes;
              }, 0); 

           console.log("Total Votes : "+totalvotes);

             
          
           polldata =  polldata.map(n => this.calculatepercent(n,totalvotes));

            polldata.sort((a, b) => b.votes - a.votes)
            
            console.log(polldata);
            pollas = polldata.map(n => this.loadCandidate(n));

        }
        return pollas;
    }

    cleanList(candidateprofile) {

        if (candidateprofile.votes == undefined) {
            candidateprofile.votes = 0;
            candidateprofile.percentage = 0;
        }
        return candidateprofile;
    }

    loadCandidate(candidateprofile) {
        let res = this.Candidate(candidateprofile); 
        return res;
    }
    
    //todo: candidate 
    Candidate(candidateprofile) {
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

    handleCallback(candidateprofile, status) {

        let polldata = this.state.polls;
        
        let cn = this.state.counter;
        let l = cn + 1;
        this.setState({ counter: l })

        let y = candidateprofile;
        let x = (y.votes == undefined) ? 0 : y.votes;
        let z = x;
        if (status == "+") {
            z = z + 1;
        } else {
            if (z > 0) {
                z = z - 1;
            }
        }


        candidateprofile.votes = z;

        this.loadPolls(polldata)

    }



}

export default polls;
