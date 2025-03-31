import { PageHeaderCustom } from "@/components/pageHeader";
import MainFeat from "./components/mainFeat";
import CategoryProductsFilter from "./components/categoryProducts";
import TableProducts from "./components/tableProducts";
import { LineFullWidth } from "@/components/line";
export function BrandsManagementPage() {
    return (
        <div className="">
            <PageHeaderCustom namePage="Quản lý thương hiệu" />

            <MainFeat />

            <CategoryProductsFilter />

            <LineFullWidth />

            <TableProducts />
        </div>
    );
}
