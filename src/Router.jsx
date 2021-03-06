import React, { Component } from 'react';
 
import login from './admin/login.';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import dashboard from './admin/dashboard';
import polls from './admin/polls';
   


const Router =  function()  {
	
 
	 
		return (
			 
				<BrowserRouter>
				<Switch>
				<Route path="*" component={polls} />
				<Route path="/login" component={login} />
				<Route path="/dashboard" component={dashboard} />
				 
					 
				</Switch>
				</BrowserRouter>
			 
		);
	
}

export default Router;
