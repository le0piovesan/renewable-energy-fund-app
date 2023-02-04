export const types = {
  create: "blog/create",
};

const initialState = {
  blog: [
    {
      title: "Are you a reNEW fund investor?",
      description: "Here are some pro tips to begin",
      linkTo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
    {
      title: "When should I sell my funds?",
      description: "Expert Rick share his opinions...",
      linkTo: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
};

export default function blog(state = initialState, action) {
  switch (action.type) {
    case types.create:
      return { ...state, blog: [...state.blog, action.payload] };
    default:
      return state;
  }
}

export const Blog = {
  newPost: (blog) => ({
    type: types.create,
    payload: blog,
  }),
};
