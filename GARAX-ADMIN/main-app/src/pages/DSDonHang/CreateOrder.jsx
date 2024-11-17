import CartInfor from "./CartInfor";
import ShowProduct from "./ShowProduct";

function CreateOrder(){
    return(
        <div>
            <div>
                Tạo đơn hàng
            </div>
            <div className="flex justify-between">
                <ShowProduct/>
                <CartInfor/>
            </div>
            
        </div>
    );
}
export default CreateOrder;