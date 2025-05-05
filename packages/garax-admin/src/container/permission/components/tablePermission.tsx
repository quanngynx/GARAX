"use client";

import { PermissionModel } from "@/apis/models";
import { TableCustom } from "@/components/tableCustom";
import { columns, rows } from "./Data/TableData";

export function TablePermission() {
    return ( 
        <TableCustom<PermissionModel>
            columns={columns}
            data={rows}
        />
    );
}