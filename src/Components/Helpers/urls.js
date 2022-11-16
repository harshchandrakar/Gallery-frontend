const API_ROOT = process.env.REACT_APP_API_URL;

export const APIUrls = {
  Login: () => `${API_ROOT}/api/v1/user/login`,
  Register: () => `${API_ROOT}/api/v1/user/register`,
  createPost: () => `${API_ROOT}/api/v1/upload/post`,
  getAllPost: () => `${API_ROOT}/api/v1/all/post?`,
};
