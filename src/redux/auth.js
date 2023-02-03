export const types = {
  user: "auth/user",
  authenticated: "auth/authenticated",
};

const defaultValues = {
  user: {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    termsAgreed: false,
  },
  authenticated: false,
};

export default function auth(state = defaultValues, action) {
  switch (action.type) {
    case types.user:
      return { ...state, user: action.user };
    case types.authenticated:
      return { ...state, authenticated: action.authenticated };

    default:
      return state;
  }
}

export const Auth = {
  addUser: (user) => ({
    type: types.user,
    user,
  }),

  authUser: (authenticated) => ({
    type: types.authenticated,
    authenticated,
  }),
};
