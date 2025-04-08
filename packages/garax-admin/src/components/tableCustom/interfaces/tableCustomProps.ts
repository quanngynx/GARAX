/* eslint-disable @typescript-eslint/no-explicit-any */
import { TableColumnsType } from "antd";

export interface TableCustomProps {
    columns: TableColumnsType<any>;
    data: any[];
}