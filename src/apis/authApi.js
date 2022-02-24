import callApi from '../utils/callApi';

const authApi = {
  loginApi(data) {
    return callApi('Users/signin', 'POST', data);
  },
  registerApi(data) {
    return callApi('Users/signup', 'POST', data);
  },
};
export default authApi;
