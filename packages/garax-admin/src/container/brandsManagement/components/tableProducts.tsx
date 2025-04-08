"use client";

import { useState } from "react";

import { TableCustom } from "@/components/tableCustom";
import { BrandModel } from "@/apis/models";
import { OrderListRequest } from "@/apis/requests/orders";

import { columns } from "./Data/TableData";
import { useGetBrandsList } from "../hooks";

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
    } = useGetBrandsList({ request: pagedListRequest });
    return ( 
        <TableCustom<BrandModel>
            columns={columns}
            data={pagedListResponse ?? []}
        />
     );
}

export default TableProducts;