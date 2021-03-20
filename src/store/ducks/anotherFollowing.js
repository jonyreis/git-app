// Default Types

export const Types = {
  ANOTHERFOLLOWING: '@anotherUser/ANOTHERFOLLOWING',
  REMOVE_FOLLOWING: '@anotherUser/REMOVE_FOLLOWING',
};

// Default values

const INITIAL_STATE =  {};


// Creating Reducers

export default function anotherFollowingUser(state = INITIAL_STATE, action) {
  switch (action.type) {
      case Types.ANOTHERFOLLOWING:
      return { name: action.anotherUser }
      case Types.REMOVE_FOLLOWING:
        return state = action.anotherUser
      default:
        return state;
  }
}

// Creating actions

export const Creators = {
  addFollowingAction: (anotherUser) => ({
    type: Types.ANOTHERFOLLOWING,
    anotherUser
  }),
  removeFollowingAction: (anotherUser) => ({
    type: Types.REMOVE_FOLLOWING,
    anotherUser
  })
};
