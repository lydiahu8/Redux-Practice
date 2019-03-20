import { combineReducers } from 'redux';
import { items, itemsHasErrored, itemsIsLoading } from './items.jsx';

export default combineReducers({
    items,
    itemsHasErrored,
    itemsIsLoading
});