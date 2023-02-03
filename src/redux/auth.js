export const types = {
  register: "auth/register",
  logIn: "auth/logIn",
};

const initialState = {
  users: [],
  currentUser: false,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case types.register:
      return { ...state, users: [...state.users, action.payload] };

    case types.logIn:
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
}

export const Auth = {
  addUser: (user) => ({
    type: types.register,
    payload: user,
  }),
  logIn: (user) => ({
    type: types.logIn,
    payload: user,
  }),
};
