import React from 'react';
import ReactDOM from 'react-dom';
import RootContainer from './containers/AppContainer';


const render = (Component: any) => {
  ReactDOM.render(
    <Component/>,
    document.getElementById('app')
  );
}

render(RootContainer);
