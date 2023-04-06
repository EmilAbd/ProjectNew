import { IPerson } from "./person";

export interface IPersonResponse {
    code: number;
    status: string;
    total: number;
    data: IPerson[]
}