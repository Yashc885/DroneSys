//import "./Colors.css";
import Input from "../../Input";

const Memory = ({ handleChange }) => {
  return (
    <>
      <div className="pl-8 ">
        <h2 className="sidebar-title text-xl md:text-2xl font-bold price-title mt-5 ">Memory</h2>
        <label className="block mt-4">
        <input
          onChange={handleChange}
          type="radio"
          value=""
          name="test2"
          className="mr-2 leading-tight"
        />
          <span className="text-sm">All</span>
        </label>
        <div className="py-2"></div>

        <Input
          handleChange={handleChange}
          value={10}
          title="0-10 GB"
          name="test1"
          
        />

        <Input
          handleChange={handleChange}
          value={20}
          title="11-20GB"
          name="test1"
        
        />

        <Input
          handleChange={handleChange}
          value={30}
          title="21-30 GB"
          name="test1"
         
        />

        <Input
          handleChange={handleChange}
          value={40}
          title="31-40 GB"
          name="test1"
          
        />
          <Input
          handleChange={handleChange}
          value={45}
          title="41+ GB"
          name="test1"
          
        />

        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            // style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label> */}
      </div>
    </>
  );
};

export default Memory;
