import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProfileContainer from '../containers/ProfileContainer';
import MainContainer from '../containers/MainContainer';

const MainRoutes = () => {
	return (
		<Switch>
			<Route exact path='/' component={MainContainer} />
			<Route path='/profile' component={ProfileContainer} />
			{/* <Route
        path="/about"
        render={props => <About {...props} extra={someVariable} />}
      /> */}
		</Switch>
	);
};

export default MainRoutes;
