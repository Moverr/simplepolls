import React  from 'react';
import { Button } from 'react-bootstrap';

const Candidate = function(props) {
    return <div className="candidate">
       <img src={props.img} />
       <br/>
       Votes :  0 <br/>
       Percentage :  20 <br/>
      <button className={"btn btn-primary"} >YA</button>
      <button className={"btn btn-primary"} onClick={()=>alert('Listen movers')}>NO</button>
    </div>;
}

export default Candidate;