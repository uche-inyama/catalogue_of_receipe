import React from 'react';
import ReactDOM from 'react-dom';
import store from './store';
import Root from './root.jsx';

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
