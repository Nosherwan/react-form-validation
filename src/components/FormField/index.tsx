import React, { Component, ChangeEvent } from 'react';
import debounce from 'lodash.debounce';

const styles = require('./styles.css');

export interface IFormField {
	label: string
	name: any
	value: string
	innerRef: any
	error: string
	changeHandler: (e: ChangeEvent<any>) => void
}

export class FormField extends Component<IFormField, any> {

	changeHandler: (e: ChangeEvent<any>) => void

	constructor(props: any) {
		super(props);
		this.changeHandler = debounce(this._changeHandler,200)
	}

	_typeHandler = (e: ChangeEvent<any>): void => {
		e.persist();
		this.changeHandler(e);
	}

	_changeHandler = (e: ChangeEvent<any>): void => {
		this.props.changeHandler(e);
	};

	render() {
		const { name, label, value, error, innerRef } = this.props;
		return (
			<div className={styles.field_container}>
				<label>
					{label}
				</label>
				<input
					ref={innerRef}
					defaultValue={value}
					name={name}
					className={error ? styles.invalid_field : styles.field}
					type='text'
					onChange={this._typeHandler}
				>
				</input>
				{error && (<div>{error}</div>)}
			</div>
		);
	}
}
