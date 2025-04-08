import { PageHeaderCustom } from "@/components/pageHeader";
import FormAddProduct from "./components/formAddProduct";

export default function AddProductsPage() {
    return (
        <div className="">
            <PageHeaderCustom namePage="Thêm sản phẩm" />

            <div className="w-full flex mt-6">
                <div className="w-full">
                    <FormAddProduct />
                </div>
            </div>
        </div>
    );
}
