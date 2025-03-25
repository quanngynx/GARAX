import { TFixedType } from "../types";

export interface IDataTableType {
    key: React.Key;
    name: string;
    age: number;
    address: string;
    tags: string[];
    fixed?: TFixedType;
    hidden?: boolean;
}