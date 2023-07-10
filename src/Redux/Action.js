export const addBlog = (blog) => {
    return {
      type: 'ADD_BLOG',
      payload: blog,
    };
};

export const fetchApiData = () => {
  return (dispatch) => {
    fetch('https://reqres.in/api/users') 
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'API_DATA_SUCCESS', payload: data });
      })
      .catch(error => {
        dispatch({ type: 'API_DATA_FAILURE', payload: error.message });
      });
  };
};


export const fetchBlogs = () => {
  return {
    type: 'FETCH_BLOGS',
  };
};

export const loginUser = (username, password) => {
  return {
    type: "LOGIN_USER",
    payload: {
      username: 'username',
      password: '123456'
    }
  };
};  