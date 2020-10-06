
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../forms/inputs/InputField';
import ButtonField from '../forms/fields/ButtonField';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = { username: '', password: '' };
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    //Functional COmponent 
    handleChange(e) {
        this.setState({ value: e.target.value });
      

    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.history.push("/dashboard/");
    }


    render() {
        return (

            <div className={'row'}>
                <div className={'col-md-10'}>
                    <form role="form" onSubmit={this.handleSubmit}>
                        <h1>LOGIN FORM </h1>

                        {/* username  */}
                        <div className="form-group">
                            <label>Username : </label>
                            <InputField className="form-control" value={this.state.username} callback={(e) => this.setState({ username: e.target.value })} />
                        </div>

                        {/* Password  */}
                        <div className="form-group">
                            <label>Password : </label>
                            <InputField className="form-control" type="password" value={this.state.password} callback={(e) => this.setState({ password: e.target.value })} />

                        </div>

                        <ButtonField className="btn btn-primary" title="SUBMIT" />
                    </form>
                </div>

            </div>
        );
    }
}

login.propTypes = {

};

export default login;