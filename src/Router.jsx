import React, { Component } from 'react';
 
import login from './admin/login.';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './admin/dashboard';
import dashboard from './admin/dashboard';
import polls from './admin/polls';
   


const Router =  function()  {
	
 
	 
		return (
			 
				<BrowserRouter>
				<Switch>
				<Route path="*" component={polls} />
				<Route path="/login" component={login} />
				<Route path="/dashboard" component={dashboard} />
				 
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
