import React from 'react'



function ButtonField(props){
    
    return <button {...props} onClick={props.callback}> props.title </button>;
}
export default ButtonField;