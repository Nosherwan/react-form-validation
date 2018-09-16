import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from '../../actions/profile';

const styles = require('./styles.css');

interface IStatus {
  id: string
  available: boolean
  updateUser: any
}

class StatusComponent extends Component<IStatus, any> {

  constructor(props: any) {
    super(props)
  }

  render() {
    const { id, updateUser, available } = this.props

    return (
      <button
        key={'change_status'}
        onClick={((e: any) =>
          updateUser({ id, available: !available })
        )}
      >
        {available ? 'Available 😄' : 'Unavailable 😴'}
      </button>
    );
  }
}

const mapStateToProps = (state: any) => {
	const { profile } = state;

	return {
    id: profile.get('id'),
    available: profile.get('available')
	};
};

const mapDispatchToProps = {
	updateUser
};

const Status = connect(mapStateToProps, mapDispatchToProps)(StatusComponent)

export { Status }
