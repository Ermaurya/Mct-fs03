const initialState = {
  isLoggedIn: false,
  loginDetail: null,
  blogs: [],
};

const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BLOG':
      return {
        ...state,
        blogs: [...state.blogs, action.payload]
      };
    case 'API_DATA_SUCCESS':
      return {
        ...state,
        apiData: action.payload,
        error: null,
      };
    case 'API_DATA_FAILURE':
      return {
        ...state,
        apiData: null,
        error: action.payload,
      };
    case 'LOGIN_USER':
      return {
        ...state,
        isLoggedIn: true,
        loginDetail: action.payload
      };
    default:
      return state;
  }
};

export default blogReducer;
