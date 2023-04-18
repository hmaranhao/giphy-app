import axios from "axios";

const api = axios.create({
  baseURL: "https://api.giphy.com/v1/",
});

const requestSuccess = (request) => {
  request.params = {
    ...request.params,
    api_key: "X1doS5t2xc56iwXfvgYUusSbk5darAES",
  };

  return request;
};

const requestError = (error) => {
  return Promise.reject(error);
};

const responseSuccess = (response) => {
  const { data, pagination } = response.data;
  return { data, pagination };
};

const responseError = (error) => {
  return Promise.reject(error);
};

api.interceptors.request.use(requestSuccess, requestError);
api.interceptors.response.use(responseSuccess, responseError);

export default api;
