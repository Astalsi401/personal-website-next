import { AxiosInstance } from "axios";
import { HttpMethod } from "./http-method";
import { API_ENDPOINTS } from "./endpoints";
import type {
  AuthResponse,
  LoginUserInput,
  Product,
  TestApiResponse,
  User,
} from "@/types";

export class FetchData {
  private method: HttpMethod;
  constructor(axios: AxiosInstance) {
    this.method = new HttpMethod(axios);
  }
  users = {
    me: () => this.method.get<User>(API_ENDPOINTS.USERS_ME),
    login: (input: LoginUserInput) =>
      this.method.post<AuthResponse>(API_ENDPOINTS.USERS_LOGIN, input),
    logout: () => this.method.post<boolean>(API_ENDPOINTS.USERS_LOGOUT, {}),
  };
  test = {
    products: () =>
      this.method.get<TestApiResponse<Product[], "products">>(
        API_ENDPOINTS.PRODUCTS
      ),
  };
}
