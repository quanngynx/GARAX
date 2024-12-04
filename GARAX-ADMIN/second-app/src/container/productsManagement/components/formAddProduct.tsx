import AddInforProduct from "./addInforProduct";
import AddMediaProduct from "./addMediaProduct";

function FormAddProduct() {
    return ( 
        <div className="w-full px-[42px] py-[41px] bg-[#e2e8f0] rounded-2xl justify-center items-center flex">
          <div className='w-full flex flex-row justify-center items-start'>
          <AddMediaProduct />
          <AddInforProduct />
          </div>
        </div>
     );
}

export default FormAddProduct;