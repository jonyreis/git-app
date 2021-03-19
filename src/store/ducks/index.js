import { combineReducers } from 'redux';

import login from './login';
import repos from './repos';
import followers from './followers';
import following from './following';

export default combineReducers({
    login,
    repos,
    followers,
    following,
});
