"use client";

import { useState } from "react";

import { TableCustom } from "@/components/tableCustom";
import { OrderModel } from "@/apis/models";
import { OrderListRequest } from "@/apis/requests/orders";

import { columns } from "./Data/TableData";
import { useGetOrdersList } from "../hooks";

function TableProducts() {
    /**
     * Chuyển về trang chính sau
     */
    // #region List Products
    const [
        pagedListRequest, 
        // setPagedListRequest
    ] = useState<OrderListRequest>({});

    const {
        data: pagedListResponse,
        // isLoading: fetchingPagedList,
        // isError,
        // error,
    } = useGetOrdersList({ request: pagedListRequest });
    return ( 
        <TableCustom<OrderModel>
            columns={columns}
            data={pagedListResponse ?? []}
        />
    );
}

export default TableProducts;