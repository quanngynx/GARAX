import Input from "../../../components/input";

// const inputCate = [
//   {
//     // eslint-disable-next-line no-undef
//     handleChange: { handleChange },
//     value: "ranges",
//     title: "ranges",
//     name: "test",
//   },
//   {
//     // eslint-disable-next-line no-undef
//     handleChange: { handleChange },
//     value: "transmission",
//     title: "transmission",
//     name: "test",
//   },
//   {
//     // eslint-disable-next-line no-undef
//     handleChange: { handleChange },
//     value: "fuel_type",
//     title: "fuel_type",
//     name: "test",
//   },
//   {
//     // eslint-disable-next-line no-undef
//     handleChange: { handleChange },
//     value: "year",
//     title: "year",
//     name: "test",
//   },
// ];
// eslint-disable-next-line react/prop-types
function Category({ handleChange }) {
  return (
    <div className="">
      <h2 className="sidebar-title">Category</h2>

      <div className="">
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="sneakers"
          title="Sneakers"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="flats"
          title="Flats"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="sandals"
          title="Sandals"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="heels"
          title="Heels"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
