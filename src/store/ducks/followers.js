// Default Types

export const Types = {
  FOLLOWERS: '@followers/FOLLOWERS',
};

// Default values

const INITIAL_STATE = []

// Creating Reducers

export default function followers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FOLLOWERS:
      return action.followers;
    default:
      return state;
  }
}

// Creating actions

export const Creators = {
  addFollowersAction: (followers) => ({
      type: Types.FOLLOWERS,
      followers
  })
};
