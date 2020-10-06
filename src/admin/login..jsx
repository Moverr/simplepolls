
  import React, { Component } from 'react';
  import PropTypes from 'prop-types';
import InputField from '../forms/inputs/InputField';
  
  
  class login extends Component {
      render() {
          return (
              
              <div className={'row'}>
                    <div className={'col-md-10'}>
                    <form role="form">
                 <h1>LOGIN FORM </h1>

                 {/* username  */}
                 <div className="form-group">
                 <label>Username : </label>
                 <InputField className="form-control" />
                 </div>

                 {/* Password  */}
                 <div className="form-group">
                 <label>Password : </label>
                 <InputField className="form-control"  type="password"/>
                
                 </div>
                 </form>
                 </div>
               
              </div>
          );
      }
  }
  
  login.propTypes = {
  
  };
  
  export default login;