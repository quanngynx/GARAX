import { PageHeaderCustom } from "@/components/pageHeader";
import MainFeat from "./components/mainFeat";
import CategoryProductsFilter from "./components/categoryProducts";
import TableProducts from "./components/tableProducts";
import { LineFullWidth } from "@/components/line";
function UsersPage() {
    return ( 
    <div className="">
        <PageHeaderCustom namePage="Danh sách người dùng"/>

        <MainFeat />

        <CategoryProductsFilter />

        <LineFullWidth />

        <TableProducts />
    </div> 
    );
}

export default UsersPage;