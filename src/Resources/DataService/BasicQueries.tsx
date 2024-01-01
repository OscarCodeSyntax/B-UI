import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:3000",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept",
  },
});

const findAll = async () => {
  const response = await apiClient.get<string[]>("/");
  return response.data;
};

const findById = async (id: number) => {
  const response = await apiClient.get<number>(`/${id}`);
  return response.data.toString();
};

const create = async (resource: string) => {
  const response = await apiClient.post<any>("/", resource);
  return response.data;
};

const update = async (id: number, resource: string) => {
  const response = await apiClient.put<any>(`/${id}`, resource);
  return response.data;
};

const deleteById = async (id: any) => {
  const response = await apiClient.delete<any>(`/${id}`);
  return response.data;
};

const BasicQueries = {
  findAll,
  findById,
  create,
  update,
  deleteById,
};

export default BasicQueries;
