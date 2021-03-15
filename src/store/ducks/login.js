// Default Types

export const Types = {
    USER: '@login/AUTHENTICATED_USER',
    AUTHENTICATED: '@login/AUTHENTICATED'
};

// Default values

const INITIAL_STATE = {
    user: {
        login: "",
        name: "",
        email: "",
        location: "",
        company: "",
        bio: "",
        avatar_url: "",
        followers_url: "",
        following_url: "",
        organizations_url: "",
        starred_url: "",
        public_repos: "",
        public_gists: "",
        followers: "",
        following: ""
    }
};

// Creating Reducers

export default function login(state = INITIAL_STATE, action) {
    switch (action.type) {
        case Types.USER:
            return { ...state, user: action.user };
        case Types.AUTHENTICATED:
            return { ...state, authenticated: action.authenticated };
        default:
            return state;
    }
}

// Creating actions

export const Creators = {
    addUserAction: (user) => ({
        type: Types.USER,
        user
    }),

    addAuthenticated: (authenticated) => ({
        type: Types.AUTHENTICATED,
        authenticated
    }),
};
