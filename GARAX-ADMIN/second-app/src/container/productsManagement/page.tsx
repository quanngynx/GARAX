// /dashboard/products-management

import { PageHeaderCustom } from "@/components/pageHeader";

import MainFeat from "./components/mainFeat";
import StatusProductsFilter from "./components/statusProducts";
import CategoryProductsFilter from "./components/categoryProducts";
import TableProducts from "./components/tableProducts";

export default function ProductsManagementPage() {
    return (
        <div className="flex flex-col min-h-[64vh]">
            <PageHeaderCustom namePage="Quản lý sản phẩm" />
            <MainFeat />
            <StatusProductsFilter />
            <CategoryProductsFilter />
            <TableProducts />
        </div>
    );
}
