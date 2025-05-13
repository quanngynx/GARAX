"use client";

import { TableCustom } from "@/components/tableCustom";
import { columns } from "./Data/TableData";
import { TransactionsListRequest, TransactionsModel } from "@/apis/requests/orders";
import { useState } from "react";
import { useGetTransactionsList } from "../hooks";

function TableProducts() {
    /**
     * Chuyển về trang chính sau
     */
    // #region List Products
    const [
        pagedListRequest, 
        // setPagedListRequest
    ] = useState<TransactionsListRequest>({});

    const {
        data: pagedListResponse,
        // isLoading: fetchingPagedList,
        // isError,
        // error,
    } = useGetTransactionsList({ request: pagedListRequest });
    return ( 
        <TableCustom<TransactionsModel>
            columns={columns}
            data={pagedListResponse?.metadata ?? []}
        />
    );
}

export default TableProducts;