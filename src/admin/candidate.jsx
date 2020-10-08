import React,{Component}  from 'react';
import { Button } from 'react-bootstrap';

 

function Candidate(props){
    const { votes, profile, img, callback,id } = props;
    return <div key={id} className="candidate">
        <img src={img} />
        <br/>
        Votes :  {votes+1} <br/>
        Percentage :  20 <br/>
       
       <button className={"btn btn-primary"} onClick={callback}  >YA</button>
       <button className={"btn btn-primary"} onClick={()=>alert('Listen movers')}>NO</button>
     </div>;
}
export default Candidate;


 