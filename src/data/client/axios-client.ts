import axios, { AxiosError, AxiosRequestHeaders } from "axios";
import { getAuthToken, removeAuthToken } from "@/data/client/token.utils";
import { ConfigValue } from "@/config";

export const isUnauthorized = (error: AxiosError) =>
  error.response &&
  ([404, 403, 401].includes(error.response.status) ||
    (error.response.data as { error: string }).error === "Not Authorized");

const AxiosClient = axios.create({
  baseURL: ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT,
  timeout: 150000000,
  headers: { "Content-Type": "application/json" },
});

AxiosClient.interceptors.request.use(
  (config) => {
    const token = getAuthToken();
    config.headers = {
      ...config.headers,
      Authorization: token ? token : "",
    } as AxiosRequestHeaders;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

AxiosClient.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    isUnauthorized(error) && removeAuthToken();
    return Promise.reject(error);
  }
);

export { AxiosClient };
