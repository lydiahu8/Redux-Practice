import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore.jsx';

import ItemList from './components/ItemList.jsx';

const store = configureStore(); // You can also pass in an initialState here

render(
    <Provider store={store}>
        <ItemList />
    </Provider>,
    document.getElementById('app')
);