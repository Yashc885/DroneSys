'use client'
import { useRouter } from 'next/navigation';
import "./Category.css";
import Input from "../../Input";

function Category({ selectedService, handleChange }) {
  const router = useRouter();
  console.log("selectect" , selectedService)

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    handleChange(event); 
    router.push(`/listview?service=${selectedValue}`);
  };

  return (
    <div className="pl-8">
      <h2 className="sidebar-title mr-20">Category</h2>
      <div>
        <label className="sidebar-label-container">
          <input
            onChange={handleRadioChange}
            type="radio"
            value=""
            name="test"
            checked={selectedService === ""}
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleRadioChange}
          value="agriculture"
          title="Agriculture"
          name="test"
          checked={selectedService === "agriculture"}
        />
        <Input
          handleChange={handleRadioChange}
          value="photography"
          title="Photography"
          name="test"
          checked={selectedService === "photography"}
        />
        <Input
          handleChange={handleRadioChange}
          value="security"
          title="Security"
          name="test"
          checked={selectedService === "security"}
        />
        <Input
          handleChange={handleRadioChange}
          value="videography"
          title="Videography"
          name="test"
          checked={selectedService === "videography"}
        />
        <Input
          handleChange={handleRadioChange}
          value="mining"
          title="Mining"
          name="test"
          checked={selectedService === "mining"}
        />
      </div>
    </div>
  );
}

export default Category;
