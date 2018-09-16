import React, { Component, ChangeEvent } from 'react';
import { FormField } from '../FormField';
import { validateForm, validateField } from '../../utilities';

const styles = require('./styles.css');

interface IProfile {
	profile: any
	getUser: any
	updateUser: any
}

class Profile extends Component<IProfile, any> {

	firstName: any
	lastName: any
	email: any
	available: any

	constructor(props: any) {
		super(props);
		this.state = {
			valid: false,
			validation: {
				firstName: {
					error: '',
					touched: false
				},
				lastName: {
					error: '',
					touched: false
				},
				email: {
					error: '',
					touched: false
				},
				available: {
					error: '',
					touched: false
				}
			},
			checkBox: props.profile.get('available'),
			message: ''
		}
	}

	componentWillMount() {
		if (!this.props.profile.get('email')) {
			this.props.getUser();
		}
	}

	componentDidUpdate(prevProps: any) {
		const available = this.props.profile.get('available')
		if (available !== prevProps.profile.get('available')) {
			this.setState({ checkBox: available })
		}
	}

	changeHandler = (e: ChangeEvent<any>): void => {

		const { validation, valid } = this.state;
		const fieldName = e.target.name;
		const fieldValue = e.target.value;

		const error = validateField(fieldName, fieldValue);

		const currentValidation = {
			...validation, ...{ [fieldName]: { error, touched: true } }
		};

		const formValid = validateForm(currentValidation);

		const newState = {
			valid: formValid,
			validation: currentValidation
		}

		if (valid !== formValid || validation[fieldName].error !== error) {
			this.setState(newState);
		}
	}

	checkBoxHandler = (e: ChangeEvent<any>): void => {
		const { validation, checkBox } = this.state;
		const currentValidation = { ...validation, ...{ available: { touched: true } } };
		const newState = {
			valid: validateForm(currentValidation),
			validation: currentValidation,
			checkBox: !checkBox
		};

		this.setState(newState);
	}

	onSubmit = (e: ChangeEvent<any>) => {
		e.preventDefault();
		const { validation } = this.state;
		const data: any = { id: this.props.profile.get('id') };
		validation['available'].touched && (data['available'] = this.state.checkBox);
		validation['firstName'].touched && (data['firstName'] = this.firstName.value);
		validation['lastName'].touched && (data['lastName'] = this.lastName.value);
		validation['email'].touched && (data['email'] = this.email.value);

		this.props.updateUser(data).then(() => {
			this.setState({ message: 'Success' })
			setTimeout(() => this.setState({ message: '' }), 5000)
		})
	}

	render() {
		const { validation, checkBox, message } = this.state;
		const { profile } = this.props;
		const firstName = profile.get('firstName');
		const lastName = profile.get('lastName');
		const email = profile.get('email');
		const buttonStyle = this.state.valid ?
			styles.submit_button :
			styles.disabled_submit_button;

		return (
			<div>
				<h2>Change Profile</h2>
				<form onSubmit={this.onSubmit} className={styles.profile_form}>
					<FormField
						label='First Name'
						innerRef={(ref: any) => this.firstName = ref}
						name='firstName'
						value={firstName}
						error={validation.firstName.error}
						changeHandler={this.changeHandler}
					/>
					<FormField
						label='Last Name'
						innerRef={(ref: any) => this.lastName = ref}
						name='lastName'
						value={lastName}
						error={validation.lastName.error}
						changeHandler={this.changeHandler}
					/>
					<FormField
						label='Email'
						innerRef={(ref: any) => this.email = ref}
						name='email'
						value={email}
						error={validation.email.error}
						changeHandler={this.changeHandler}
					/>
					<div>
						<label>Select Status</label>
						<input
							ref={(ref: any) => this.available = ref}
							name="available"
							type="checkbox"
							checked={checkBox}
							onChange={this.checkBoxHandler} />
					</div>
					<button type="submit" className={buttonStyle}> Submit </button>
					{message && <div className={styles.message}>{message}</div>}
				</form>
			</div>
		);
	}
}

export { Profile }
