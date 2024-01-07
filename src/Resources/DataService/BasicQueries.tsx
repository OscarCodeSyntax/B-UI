import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080/apiController",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
});

const findAll = async () => {
  try {
    const response = await apiClient.get<string[]>("/");
    return response.data;
  } catch (error) {
    console.error("findAll call failed" + error);
  }
};

const findById = async (id: number) => {
  try {
    const response = await apiClient.get<number>(`/${id}`);
    return response.data.toString();
  } catch (error) {
    console.error("findById call failed" + error);
  }
};

const create = async (resource: string) => {
  try {
    const response = await apiClient.post<any>("/", resource);
    return response.data;
  } catch (error) {
    console.error("create call failed" + error);
  }
};

const update = async (id: number, resource: string) => {
  try {
    const response = await apiClient.put<any>(`/${id}`, resource);
    return response.data;
  } catch (error) {
    console.error("update call failed" + error);
  }
};

const deleteById = async (id: any) => {
  try {
    const response = await apiClient.delete<any>(`/${id}`);
    return response.data;
  } catch (error) {
    console.error("deleteById call failed" + error);
  }
};

const BasicQueries = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};

export default BasicQueries;
