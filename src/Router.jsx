import React, { Component } from 'react';
 
import login from './admin/login.';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './admin/dashboard';
   


const Router =  function()  {
	
 
	 
		return (
			 
				<BrowserRouter>
				<Switch>
				<Route path="/login" component={login} />
				<Route path="/login" component={Dashboard} />
				 
					{/* <Route exact  path="/verify" component={Verify} /> */}
					{/* <Route exact path="/login/" component={Login}/> */}
                    {/* <Route path="/login/:schoolName" component={Login} /> */}
					{/* <Route path="/dashboard/*" component={Dashboard} />
					<Route path="*" component={Home} /> */}
				</Switch>
				</BrowserRouter>
			 
		);
	
}

export default Router;
