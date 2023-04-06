import { IProduct } from "./product";

export interface IProductResponse {
    code: number;
    status: string;
    total: number;
    data: IProduct[]
}