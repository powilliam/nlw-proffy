import axios from "axios";
import { Classes } from "../models/Classes";
import { Teacher } from "../models/Teacher";
import { Schedule } from "../models/Schedule";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export interface IGetQueriedClassesParams {
  week_day: string;
  subject: string;
  time: string;
}
export interface IGetQueriedClassesResponse extends Classes {}
export async function getQueriedClasses(params: IGetQueriedClassesParams) {
  return await api.get<IGetQueriedClassesResponse[]>("classes", { params });
}

export interface IGetTotalConnectionsResponse {
  total: number;
}
export async function getTotalConnections() {
  return await api.get<IGetTotalConnectionsResponse>("connections");
}

export interface ICreateClassBody extends Teacher {
  schedules: Schedule[];
}
export async function createClass(body: ICreateClassBody) {
  return await api.post("classes", body);
}

export async function createConnection(teacherID: string) {
  return await api.post(`connections/${teacherID}`, {});
}
