import PageHeader from "./components/pageHeader";

import MainProfile from "./components/mainProfile";

function createProduct() {
  return (
    <div className="">
      <PageHeader />
      <div className="w-full flex mt-6">
        <div className="w-full">
          <MainProfile />
        </div>
      </div>
    </div>
  );
}

export default createProduct;
