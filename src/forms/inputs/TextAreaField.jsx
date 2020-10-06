import React from 'react'

function TextAreaField(props){
    return <textarea {...props} >props.value</textarea>
}
export default TextAreaField;