import React, { Component } from 'react';

class dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = { category: 'Dashboard' };


    }


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
                                <span href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener"  >  Registrations <span class="badge badge-light badge-pill">14</span></span>
                                <a href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener"> Apointments <span class="badge badge-light badge-pill">14</span></a>
                                <a href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener"> Enquiries <span class="badge badge-light badge-pill">14</span></a>
                                <a href="#" className="list-group-item list-group-item-action   justify-content-between google-drive-opener"> Progress Reports <span class="badge badge-light badge-pill">14</span></a>

                                <div className="list-group-item">


                                </div>

                            </div>
                        </div>
                        <div className="col-md-10">
                            <div>
                                <h1>{this.state.category}</h1>
                                <br />

                                <div class="container-fluid">
                                    <div className="row">
                                        <div className="col-md-12">
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>
                                                            #
						</th>
                                                        <th>
                                                            Product
						</th>
                                                        <th>
                                                            Payment Taken
						</th>
                                                        <th>
                                                            Status
						</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            1
						</td>
                                                        <td>
                                                            TB - Monthly
						</td>
                                                        <td>
                                                            01/04/2012
						</td>
                                                        <td>
                                                            Default
						</td>
                                                    </tr>
                                                    <tr className="table-active">
                                                        <td>
                                                            1
						</td>
                                                        <td>
                                                            TB - Monthly
						</td>
                                                        <td>
                                                            01/04/2012
						</td>
                                                        <td>
                                                            Approved
						</td>
                                                    </tr>
                                                    <tr className="table-success">
                                                        <td>
                                                            2
						</td>
                                                        <td>
                                                            TB - Monthly
						</td>
                                                        <td>
                                                            02/04/2012
						</td>
                                                        <td>
                                                            Declined
						</td>
                                                    </tr>
                                                    <tr className="table-warning">
                                                        <td>
                                                            3
						</td>
                                                        <td>
                                                            TB - Monthly
						</td>
                                                        <td>
                                                            03/04/2012
						</td>
                                                        <td>
                                                            Pending
						</td>
                                                    </tr>
                                                    <tr className="table-danger">
                                                        <td>
                                                            4
						</td>
                                                        <td>
                                                            TB - Monthly
						</td>
                                                        <td>
                                                            04/04/2012
						</td>
                                                        <td>
                                                            Call in to confirm
						</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default dashboard;