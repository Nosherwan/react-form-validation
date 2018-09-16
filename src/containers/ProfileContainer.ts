import { connect } from 'react-redux';
// import { goBack } from 'react-router-redux';
import { Profile } from '../components/Profile';
import {
	getUser,
	updateUser,
} from '../actions/profile';

const mapStateToProps = (state: any) => {
	const { profile } = state;

	return {
		profile
	};
};

const mapDispatchToProps = {
	getUser,
	updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
