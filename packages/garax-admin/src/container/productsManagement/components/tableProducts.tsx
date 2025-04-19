"use client";

import { TableCustom } from "@/components/tableCustom";
import { columns } from "./Data/TableData";
import { ProductModel } from "@/apis/models";
import { ProductListRequest } from "@/apis/requests/products";
import { useState } from "react";
import { useGetProductsList } from "../hooks";

function TableProducts({
    // onReloadData
}) {
    /**
     * Chuyển về trang chính sau
     */
    // #region List Products
    const [
        pagedListRequest, 
        // setPagedListRequest
    ] = useState<ProductListRequest>({});

    const {
        data: pagedListResponse,
        // isLoading: fetchingPagedList,
        // isError,
        // error,
    } =
        useGetProductsList({
          request: pagedListRequest,
    });

    return ( 
        <TableCustom<ProductModel>  
            columns={columns}
            data={pagedListResponse.metadata ?? []}
        />
    );
}

export default TableProducts;