import React, { Component } from 'react';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import { Status } from '../Status';

const styles = require('./styles.css');

const buttons = [
  { name: 'main', path: '/' },
  { name: 'profile', path: '/profile' }
];

interface INavbar {
  dispatch: any
}

class NavbarComponent extends Component<INavbar, any> {

  constructor(props: any) {
    super(props)
  }

  render() {
    const { dispatch } = this.props

    return (
      <div className={styles.nav_container}>
        {buttons.map((btn: any) =>
          <button
            key={btn.name}
            onClick={((e: any) => {
              dispatch(push(btn.path))
            }
            )}
          >
            {btn.name}
          </button>)}
          <Status/>
      </div>
    );
  }
}

const Navbar = connect()(NavbarComponent)

export { Navbar }
