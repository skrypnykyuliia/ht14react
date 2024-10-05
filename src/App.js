import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import User from './components/User';
import UserForm from './components/UserForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Управление пользователем</h1>
        <User />
        <UserForm />
      </div>
    </Provider>
  );
}

export default App;
