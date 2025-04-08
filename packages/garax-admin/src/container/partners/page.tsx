import { PageHeaderCustom } from "@/components/pageHeader";
import MainFeat from "./components/mainFeat";
import CategoryProductsFilter from "./components/categoryProducts";
import TableProducts from "./components/tableProducts";
import { LineFullWidth } from "@/components/line";
function PartnersPage() {
    return ( 
    <div className="">
        <PageHeaderCustom namePage="Danh sách đại lý"/>

        <MainFeat />

        <CategoryProductsFilter />

        <LineFullWidth />

        <TableProducts />
    </div> 
    );
}

export default PartnersPage;