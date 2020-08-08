import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { Classes } from "../models/Classes";
import { Teacher } from "../models/Teacher";
import { Schedule } from "../models/Schedule";

export interface IGetQueriedClassesParams {
  week_day: string;
  subject: string;
  time: string;
}
export interface IGetQueriedClassesResponse extends Classes {}
export interface IGetTotalConnectionsResponse {
  total: number;
}
export interface ICreateClassBody extends Omit<Teacher, "id"> {
  schedules: Omit<Schedule, "id">[];
}
export interface ICreateServiceConfig extends AxiosRequestConfig {}
export interface IService {
  getQueriedClasses: (
    params: IGetQueriedClassesParams
  ) => Promise<AxiosResponse<IGetQueriedClassesResponse[]>>;
  getTotalConnections: () => Promise<
    AxiosResponse<IGetTotalConnectionsResponse>
  >;
  createClass: (body: ICreateClassBody) => Promise<AxiosResponse<any>>;
  createConnection: (teacherID: string) => Promise<AxiosResponse<any>>;
}
export function createService(config?: ICreateServiceConfig): IService {
  const api = axios.create(config);

  return {
    async getQueriedClasses(params) {
      return await api.get("classes", { params });
    },
    async getTotalConnections() {
      return await api.get("connections");
    },
    async createClass(body) {
      return await api.post("classes", body);
    },
    async createConnection(teacherID) {
      return await api.post(`connections/${teacherID}`, {});
    },
  };
}
