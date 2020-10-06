
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../forms/inputs/InputField';
import ButtonField from '../forms/fields/ButtonField';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {  username: '',   password: ''  };

    }


    //Functional COmponent 
    handleChange(e) {
        this.setState({ value: e.target.value });
    }




    render() {
        return (

            <div className={'row'}>
                <div className={'col-md-10'}>
                    <form role="form">
                        <h1>LOGIN FORM </h1>

                        {/* username  */}
                        <div className="form-group">
                            <label>Username : </label>
                            <InputField className="form-control"     value={this.state.username}    callback={(e)=>this.setState({username:e.target.value})}    />
                        </div>

                        {/* Password  */}
                        <div className="form-group">
                            <label>Password : </label>
                            <InputField className="form-control" type="password"   value={this.state.password}    callback={(e)=>this.setState({password:e.target.value})} />

                        </div>

                        <ButtonField  title="SUBMIT" />
                    </form>
                </div>

            </div>
        );
    }
}

login.propTypes = {

};

export default login;