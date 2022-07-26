import React from 'react';
import {Provider} from 'react-redux';
import {store,persistor} from './store';
import Routes from './routes';
import './global.css';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
}

export default App;