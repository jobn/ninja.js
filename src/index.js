import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import userData from './data/userData';

ReactDOM.render(<App rows={userData} />, document.getElementById('root'));
