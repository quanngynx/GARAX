import AddInforProduct from "./addInforProduct";
import AddMediaProduct from "./addMediaProduct";

function FormAddProduct() {
    return ( // bg-[#e2e8f0]
        <div className="w-full justify-center items-center flex">
          <div className='w-full flex flex-row justify-center items-start gap-6'>
          <AddMediaProduct />
          <AddInforProduct />
          </div>
        </div>
     );
}

export default FormAddProduct;