// Default Types

export const Types = {
  REPOS: '@repos/REPOSITORIOS',
};

// Default values

const INITIAL_STATE = []

// Creating Reducers

export default function repos(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REPOS:
      return action.repos;
    default:
      return state;
  }
}

// Creating actions

export const Creators = {
  addReposAction: (repos) => ({
      type: Types.REPOS,
      repos
  })
};
