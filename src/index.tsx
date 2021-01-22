import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Main} from './components/main/Main';
import {Landing} from './components/main/Landing'
import {Login} from './components/main/Login';
import {SignIn} from './container/SignIn'
import { rootSaga } from './store/sagas';
import {store, sagaMiddleware} from './store';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    {/* <Main /> */}
    {/* <Landing />
    <Login /> */}
    <SignIn />
  </Provider>,
  document.getElementById('root')
);

