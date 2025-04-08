/* eslint-disable @typescript-eslint/no-explicit-any */
interface ProductsProps {
  result: any;
}

const Products = ({ 
  result
}: ProductsProps) => {
  return (
    <>
      <section className="grid md:grid-cols-4 gap-2 z-[-2]">{result}</section>
    </>
  );
};

export default Products;
