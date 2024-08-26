'use client';
import { useRouter } from 'next/navigation';
import "./Category.css";
import Input from "../../Input";

function Category({ selectedService, handleChange }) {
  const router = useRouter();

  const handleRadioChange = (event) => {
    const selectedValue = event.target.value;
    handleChange('service', selectedValue);
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
            name="service"
            checked={selectedService === ""}
          />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleRadioChange}
          value="agriculture"
          title="Agriculture"
          name="service"
          checked={selectedService === "agriculture"}
        />
        <Input
          handleChange={handleRadioChange}
          value="photography"
          title="Photography"
          name="service"
          checked={selectedService === "photography"}
        />
        <Input
          handleChange={handleRadioChange}
          value="security"
          title="Security"
          name="service"
          checked={selectedService === "security"}
        />
        <Input
          handleChange={handleRadioChange}
          value="videography"
          title="Videography"
          name="service"
          checked={selectedService === "videography"}
        />
        <Input
          handleChange={handleRadioChange}
          value="mining"
          title="Mining"
          name="service"
          checked={selectedService === "mining"}
        />
      </div>
    </div>
  );
}

export default Category;
