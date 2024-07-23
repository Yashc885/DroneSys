import "./Category.css";
import Input from "../../Input";

function Category({ handleChange }) {
  return (
    <div className="pl-8">
      <h2 className="sidebar-title mr-20 ">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="agriculture"
          title="Agriculture"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="photography"
          title="Photography"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="security"
          title="Security"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="mining"
          title="Mining"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
