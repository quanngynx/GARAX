// /dashboard/products-management
"use client";
import { PageHeaderCustom } from "@/components/pageHeader";

import MainFeat from "./components/mainFeat";
import StatusProductsFilter, { ItemStatusProps } from "./components/statusProducts";
import CategoryProductsFilter from "./components/categoryProducts";
import TableProducts from "./components/tableProducts";
import { useState } from "react";

const btnStatus: ItemStatusProps[] = [
    {
      id: '0',
      name: 'Tất cả',
      value: 69
    },
    {
      id: '1',
      name: 'Đã xuất bản',
      value: 69
    },
    {
      id: '2',
      name: 'Bản nháp',
      value: 69
    },
  ];

export default function ProductsManagementPage() {
    const [selectStatus, setSelectStatus] = useState<string | null>(null);

    return (
        <div className="flex flex-col min-h-[64vh]">
            <PageHeaderCustom namePage="Quản lý sản phẩm" />
            <MainFeat />    
            <StatusProductsFilter 
                selectStatus={selectStatus}
                setSelectStatus={setSelectStatus}
                btnStatus={btnStatus}
                id={""}
                name={""} 
                value={0}            
            />
            <CategoryProductsFilter />
            <TableProducts />
        </div>
    );
}
