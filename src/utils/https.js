import axios from "axios";

export const formatUrl = (url, params) => {
  const param =
    params && Object.keys(params).length > 0
      ? `?${new URLSearchParams(params).toString()}`
      : "";
  return `${url}${param}`;
};

export const httpPost = (url, data) =>
  new Promise((resolve) => {
    let axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .post(url, data, axiosConfig, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });

export const httpGet = async (url, params) =>
  new Promise((resolve) => {
    let axiosConfig = {
      headers: {
        authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    axios
      .get(formatUrl(url, params), axiosConfig, {
        withCredentials: true,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((error) => {
        resolve(error.response);
      });
  });
