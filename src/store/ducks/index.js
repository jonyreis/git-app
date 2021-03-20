import { combineReducers } from 'redux';

import login from './login';
import repos from './repos';
import followers from './followers';
import following from './following';
import anotherFollowersUser from './anotherFollowers';
import anotherFollowingUser from './anotherFollowing';

export default combineReducers({
    login,
    repos,
    followers,
    following,
    anotherFollowersUser,
    anotherFollowingUser,
});
