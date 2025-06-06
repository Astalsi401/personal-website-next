import { ConfigValue } from "@/config";

export const API_ENDPOINTS = {
  USERS_ME: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT}/b2b/auth/me`,
  USERS_LOGIN: `${ConfigValue.NEXT_PUBLIC_REST_API_ENDPOINT}/b2b/login`,
  USERS_LOGOUT: "/logout",
  PRODUCTS: "https://dummyjson.com/products",
};
