import React, { Component } from 'react';

interface IMain {
  profile: any
  getUser: any
}
class Main extends Component<IMain,any> {

	constructor (props: any) {
		super(props)
	}

	componentWillMount() {
		if(!this.props.profile.get('email')){
			this.props.getUser();
		}
	}

	render() {

		return (
			<div>
				This is your Main page 🚀
			</div>
		);
	}
}


export { Main }
