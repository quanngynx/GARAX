import { PageHeaderCustom } from "@/components/pageHeader";
import MainFeat from "./components/mainFeat";
import CategoryProductsFilter from "./components/categoryProducts";
import TableProducts from "./components/tableProducts";
import { LineFullWidth } from "@/components/line";
function ReviewsPage() {
    return ( 
    <div className="">
        <PageHeaderCustom namePage="Đánh giá, phản hồi từ người dùng, đối tác"/>

        <MainFeat />

        <CategoryProductsFilter />

        <LineFullWidth />

        <TableProducts />
    </div> 
    );
}

export default ReviewsPage;