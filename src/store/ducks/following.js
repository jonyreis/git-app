// Default Types

export const Types = {
  FOLLOWING: '@following/FOLLOWING',
};

// Default values

const INITIAL_STATE = []

// Creating Reducers

export default function following(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FOLLOWING:
      return action.following;
    default:
      return state;
  }
}

// Creating actions

export const Creators = {
  addFollowingAction: (following) => ({
      type: Types.FOLLOWING,
      following
  })
};
