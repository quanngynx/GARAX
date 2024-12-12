"use client";

import { TableCustom } from "@/components/tableCustom";
import { columns, data } from "./Data/TableData";

function TableProducts() {
    return ( 
        <TableCustom 
        columns={columns}
        data={data}
        />
     );
}

export default TableProducts;