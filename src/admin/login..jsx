
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputField from '../forms/inputs/InputField';


class login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            verifyBtn: 'VERIFY SCHOOL',
            schoolName: '',
            message_status: '-success displaynone',
            message: ' Wait a minute '
        };

    }


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
                            <InputField className="form-control"
                                value={this.state.schoolName}


                            />
                        </div>

                        {/* Password  */}
                        <div className="form-group">
                            <label>Password : </label>
                            <InputField className="form-control" type="password" />

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