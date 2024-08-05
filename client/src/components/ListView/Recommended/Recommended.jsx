import Button from "../Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="mx-2 md:mx-2 my-5  "> 
      <h2 className="  mb-2 md:mb-5 mt-5 text-xl md:text-2xl font-extrabold">Recommended</h2>
      <div className="flex flex-wrap    space-x-4 md:space-x-6 mb-4 md:mb-8  "> 
        <Button onClickHandler={handleClick} value="" title=" Flight Time"  />
        <Button onClickHandler={handleClick} value="60 min" title="60 min" />
        <Button onClickHandler={handleClick} value="90 min" title="90 min" />
        <Button onClickHandler={handleClick} value="120 min" title="120  min"  />
        <Button onClickHandler={handleClick} value="150 min" title="150 min" />
      </div>
    </div>
  );
};

export default Recommended;
