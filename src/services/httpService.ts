import axios, { AxiosResponse } from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_APP_API_URL}`,
  headers: {
    "Content-Type": "application/json",
  },
});

export class HTTPService {
  static get(path = ''): Promise<AxiosResponse> {
    return axiosInstance
      .get(`${path}`)
      .then((response: AxiosResponse) => response.data)
      .catch(err => {
        throw new Error(err);
      });
  }
};

