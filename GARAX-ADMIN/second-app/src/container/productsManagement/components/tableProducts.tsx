"use client";

import { DataType, TableCustom } from "@/components/tableCustom";
import { columns, data } from "./Data/TableData";

function TableProducts() {
    return ( 
        <TableCustom<DataType>  
        columns={columns}
        data={data}
        />
    );
}

export default TableProducts;