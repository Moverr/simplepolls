import React, { Component } from 'react';

class dashboard extends Component {
    render() {
        return (
            <div className="row">
            <div className="col-md-12">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                     
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                        <span className="navbar-toggler-icon"></span>
                    </button> <a className="navbar-brand google-drive-opener" href="#">ULTRA LIGNERS</a>
                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                 <a className="nav-link google-drive-opener" href="#">Home <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                 <a className="nav-link google-drive-opener" href="#">About Us</a>
                            </li>
                            <li className="nav-item dropdown">
                                 <a className="nav-link dropdown-toggle google-drive-opener" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                     <a className="dropdown-item google-drive-opener" href="#">Action</a> <a class="dropdown-item google-drive-opener" href="#">Another action</a> <a class="dropdown-item google-drive-opener" href="#">Something else here</a>
                                    <div className="dropdown-divider">
                                    </div> <a className="dropdown-item google-drive-opener" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="text" /> 
                            <button className="btn btn-primary my-2 my-sm-0" type="submit">
                                Search
                            </button>
                        </form>
                        <ul className="navbar-nav ml-md-auto">
                            <li className="nav-item active">
                                 <a className="nav-link google-drive-opener" href="#">Link <span class="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item dropdown">
                                 <a className="nav-link dropdown-toggle google-drive-opener" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown">Dropdown link</a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                     <a className="dropdown-item google-drive-opener" href="#">Action</a> <a class="dropdown-item google-drive-opener" href="#">Another action</a> <a class="dropdown-item google-drive-opener" href="#">Something else here</a>
                                    <div className="dropdown-divider">
                                    </div> <a className="dropdown-item google-drive-opener" href="#">Separated link</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className="row">
                    <div className="col-md-2">
                        <div className="list-group">
                             <a href="#" className="list-group-item list-group-item-action active google-drive-opener">Home</a>
                            <div className="list-group-item">
                                Doctor's Panel
                            </div>
                            <a href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener">Patients <span class="badge badge-light badge-pill">14</span></a>
                            <a href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener">Patients <span class="badge badge-light badge-pill">14</span></a>
                            <a href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener">Patients <span class="badge badge-light badge-pill">14</span></a>
                            <a href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener">Patients <span class="badge badge-light badge-pill">14</span></a>
                            <a href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener">Patients <span class="badge badge-light badge-pill">14</span></a>

                            <div className="list-group-item">
                                
                                <p className="list-group-item-text">
                                    Movers
                                </p>
                            </div>
                            {/* <div className="list-group-item justify-content-between">
                                Help <span className="badge badge-secondary badge-pill">14</span>
                            </div>  */}
                            {/* <a href="#" className="list-group-item list-group-item-action active justify-content-between google-drive-opener">Home <span class="badge badge-light badge-pill">14</span></a> */}
                        </div>
                    </div>
                    <div className="col-md-6">
                    </div>
                </div>
            </div>
        </div>
        );  
    }
}

export default dashboard;