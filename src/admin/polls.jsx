import React, { Component } from 'react';
import '../css/polling.css';

class polls extends Component {
    render() {
        return (
            <div className="wrapper">
                <candidate/>
                <div className="candidate"></div>
                <div className="candidate"></div>
                <div className="candidate"></div>
                <div className="candidate"></div>
                <div className="candidate"></div>
                <div className="candidate"></div>
                <div className="candidate"></div>
            </div>
        );
    }
}

export default polls;