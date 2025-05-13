"use client";

import { TableCustom } from "@/components/tableCustom";
import { columns } from "./Data/TableData";
import { ProductModel } from "@/apis/models";
import { ProductListRequest } from "@/apis/requests/products";
import { useState } from "react";
import { useGetProductsList } from "../hooks";
import { message } from "antd";

function TableProducts({
    // onReloadData
}) {
    const [messageApi, contextHolder] = message.useMessage();
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
        isLoading: fetchingPagedList,
        isError: isErrorPagedList,
        error: errorPagedList,
    } =
        useGetProductsList({
          request: pagedListRequest,
    });

    if(fetchingPagedList) return (<p>Đang tải dữ liệu...</p>);
    if(isErrorPagedList) return (<p>Đã xảy ra lỗi</p>);
    if(errorPagedList) {
        messageApi.open({
            type: 'error',
            content: `Đã xảy ra lỗi: \n ${errorPagedList}`,
        });
    }

    return ( 
        <>
        {contextHolder}
        <TableCustom<ProductModel>  
            columns={columns}
            data={pagedListResponse?.metadata ?? []}
        />
        </>
    );
}

export default TableProducts;