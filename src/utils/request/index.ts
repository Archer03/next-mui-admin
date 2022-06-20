import axios from "axios";
import { createRoot } from "react-dom/client";
import Loading from "../../components/Loading";
import { alertError } from "../../components/showSnackbar";

const $http = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 1000
});

export default $http;

let loadingApiCount = 0;

$http.interceptors.request.use(function (config) {
  if (loadingApiCount++ === 0) {
    showLoading();
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});

$http.interceptors.response.use(function (response) {
  if (--loadingApiCount === 0) {
    hideLoading();
  }
  return response;
}, function (error) {
  if (--loadingApiCount === 0) {
    hideLoading();
  }
  alertError('Network Error', error.toString())
  return Promise.reject(error);
});

const showLoading = () => {
  const div = document.createElement('div');
  div.id = 'loadingGlobalDiv';
  document.body.append(div);
  const temp = createRoot(div);
  temp.render(Loading());
}

const hideLoading = () => {
  const div = document.getElementById('loadingGlobalDiv')
  document.body.removeChild(div!);
}