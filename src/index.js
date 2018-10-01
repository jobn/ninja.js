import React from 'react';
import ReactDOM from 'react-dom';
import userData from './user-data.json';
import App from './App';

ReactDOM.render(<App rows={userData} />, document.getElementById('root'));
