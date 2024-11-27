const Products = ({ result }) => {
  return (
    <>
      <section className="grid md:grid-cols-4 gap-2 z-[-2]">{result}</section>
    </>
  );
};

export default Products;
