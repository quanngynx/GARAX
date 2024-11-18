import CartInfor from "./CartInfor";
import ShowProduct from "./ShowProduct";

function CreateOrder(){
    return(
        <div>
            <div>
                Tạo đơn hàng
            </div>
            <div className="flex justify-between space-x-20">
                <ShowProduct className="w-[60%]"/>
                <CartInfor className="w-[40%]"/>
            </div>
            
        </div>
    );
}
export default CreateOrder;