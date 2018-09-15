import React, { Component } from 'react';

interface IProfile {
	profile: any
}

class Profile extends Component<IProfile, any> {

	constructor(props: any) {
		super(props);
	}

	componentWillMount() {
	}

	render() {

		return (
      <div> Profile </div>
		);
	}
}

export { Profile }
