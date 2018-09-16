import React, { Component, ChangeEvent } from 'react';
import { FormField } from '../FormField';
import { validateForm, validateField } from '../../utilities';

const styles = require('./styles.css');

interface IProfile {
	profile: any
	updateUser: any
}

class Profile extends Component<IProfile, any> {

	firstName: any
	lastName: any
	email: any

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
				}
			}
		}
	}

	componentWillMount() {
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

	onSubmit = (e: ChangeEvent<any>) => {
		e.preventDefault();
		const firstName = this.firstName.value;
		const lastName = this.lastName.value;
		const email = this.email.value;

		console.log('firstName', firstName);
		console.log('lastName', lastName);
		console.log('email', email);

	}

	render() {
		const { validation } = this.state;
		const { profile } = this.props;
		const firstName = profile.get('firstName');
		const lastName = profile.get('lastName');
		const email = profile.get('email');
		const available = profile.get('available');
		const buttonStyle = this.state.valid ?
			styles.submit_button :
			styles.disabled_submit_button;

		console.log('_button_', this.state.valid);

		return (
			<div>
				<div>Change Profile</div>
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
					<button type="submit" className={buttonStyle}> Submit </button>
				</form>
			</div>
		);
	}
}

export { Profile }
