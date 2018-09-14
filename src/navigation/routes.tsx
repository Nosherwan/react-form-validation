import React from 'react';
import { Route } from 'react-router-dom';
import ProfileContainer from '../containers/ProfileContainer';
import MainContainer from '../containers/MainContainer';

const MainRoutes = () => {
	return (
		<div>
			<Route exact path='/' component={MainContainer} />
			<Route path='/profile' component={ProfileContainer} />
		</div>
	);
};

export default MainRoutes;
