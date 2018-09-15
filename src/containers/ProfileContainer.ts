import { connect } from 'react-redux';
// import { goBack } from 'react-router-redux';
import { Profile } from '../components/Profile';
import {
	getUser,
	updateUser,
} from '../actions/profile';

const makeMapStateToProps = () => {

	const mapStateToProps = (state: any) => {
		const { Profile } = state;
		
		return {
			Profile
		};
	};

	return mapStateToProps;
};

const mapDispatchToProps = {
	getUser,
	updateUser
};

export default connect(makeMapStateToProps, mapDispatchToProps)(Profile);
