import { connect } from 'react-redux';
import { Main } from '../components/Main';
import {
	getUser
} from '../actions/profile';

const mapStateToProps = (state: any) => {
	const { profile } = state;

	return {
		profile
	};
};

const mapDispatchToProps = {
	getUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
