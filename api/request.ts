import axios, { AxiosResponse } from "axios";
import { BASEURL } from "./constants";

export async function makeConnection(endPoint: string, method: string, body?: Record<string, unknown>): Promise<AxiosResponse<any>> {
  const getToken = async (): Promise<void> => {
    try {
      const response: AxiosResponse<{ access_token: string }> = await axios.post(BASEURL + "login", {
        email: "master@gmail.com",
        password: "123456"
      });
      localStorage.setItem('authToken', response.data.access_token);
    } catch (error) {
      console.error('Erro ao obter token:', error);
      throw error;
    }
  };

  let url = BASEURL + endPoint;

  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
      'Content-Type': 'application/json'
    }
  };

  try {
    let response: AxiosResponse<any>;
    switch (method) {
      case "GET":
        response = await axios.get(url, config);
        break;
      case "POST":
        response = await axios.post(url, body, config);
        break;
      case "PUT":
        response = await axios.put(url, body, config);
        break;
      case "DELETE":
        response = await axios.delete(url, config);
        break;
      default:
        throw new Error(`Método HTTP não suportado: ${method}`);
    }
    return response;
  } catch (error) {
    if (error.response && error.response.data.error.includes("Unauthenticated")) {
      await getToken();
      config.headers.Authorization = `Bearer ${localStorage.getItem('authToken')}`;
    }
    switch (method) {
      case "GET":
        return await axios.get(url, config);
      case "POST":
        return await axios.post(url, body, config);
      case "PUT":
        return await axios.put(url, body, config);
      case "DELETE":
        return await axios.delete(url, config);
    }

    console.error('Erro na requisição:', error);
    throw error;
  }

}
