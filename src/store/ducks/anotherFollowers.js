// Default Types

export const Types = {
  ANOTHERFOLLOWERS: '@anotherUser/ANOTHERFOLLOWERS',
  REMOVE_FOLLOWERS: '@anotherUser/REMOVE_FOLLOWERS',
};

// Default values

const INITIAL_STATE = {};


// Creating Reducers

export default function anotherFollowersUser(state = INITIAL_STATE, action) {
  switch (action.type) {
      case Types.ANOTHERFOLLOWERS:
       return { name: action.anotherUser }
      case Types.REMOVE_FOLLOWERS:
        return state = action.anotherUser
      default:
          return state;
  }
}

// Creating actions

export const Creators = {
  addFollowersAction: (anotherUser) => ({
    type: Types.ANOTHERFOLLOWERS,
    anotherUser
  }),
  removeFollowersAction: (anotherUser) => ({
    type: Types.REMOVE_FOLLOWERS,
    anotherUser
  })
};
