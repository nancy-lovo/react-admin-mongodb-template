import axios, { AxiosRequestConfig } from "axios";

const handleResponse = (response: any) => {
  let { status, statusText, data } = response;
  if (status < 200 || status >= 300) {
    return Promise.reject({
      data: data || statusText,
      status,
    });
  }
  return Promise.resolve(response);
};

const handleError = (error: any) => {
  if (error.response) {
    let { status, statusText, data } = error.response;
    if (status < 200 || status >= 300) {
      return Promise.reject({
        data: data || statusText,
        status,
      });
    }
  }
};

const accessToken = () => localStorage.getItem("auth");

export const fetchJson = (url: string, options: AxiosRequestConfig) => {
  return axios(url, {
    ...options,
    headers: {
      Authorization: accessToken(),
    },
  }).then(
    (response) => handleResponse(response),
    (error) => handleError(error)
  );
};

const apiClient = axios.create();
apiClient.defaults.baseURL = `${process.env.REACT_APP_SERVER_URL}`;
apiClient.defaults.headers = { Authorization: accessToken() };
apiClient.defaults.withCredentials = true;

apiClient.interceptors.response.use(
  (response) => handleResponse(response),
  (error) => handleError(error)
);

export const sendFormData = (
  resource: string,
  resourceId: string,
  data: any,
  onUploadProgress: (progressEvent: any) => void
) =>
  apiClient(`/${resource}/${resourceId}`, {
    method: "PUT",
    headers: {
      Authorization: accessToken(),
      "Content-Type": "multipart/form-data",
    },
    data,
    onUploadProgress,
  });
