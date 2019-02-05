import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { history } from '../navigation/history';
import { configureStore } from '../store/configureStore';
import Routes from '../navigation/routes';
import { Navbar } from '../components/Navbar';
// import { hot } from 'react-hot-loader/root'

class AppContainer extends PureComponent {

	store: any

	componentWillMount() {
		this.store = configureStore();
	}

	render() {
		const {
			store
		} = this;
		return (
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<>
						<Navbar key={0} />
						<Routes key={1} />
					</>
				</ConnectedRouter>
			</Provider>
		);
	}
}

export default AppContainer;
