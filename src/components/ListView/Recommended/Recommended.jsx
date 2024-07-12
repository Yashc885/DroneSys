import Button from "../Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="mx-2 md:mx-2 my-5  "> 
      <h2 className="  mb-2 md:mb-5 mt-5 text-xl md:text-2xl font-extrabold">Recommended</h2>
      <div className="flex flex-wrap    space-x-4 md:space-x-6 mb-4 md:mb-8  "> 
        <Button onClickHandler={handleClick} value="" title="All Companies"  />
        <Button onClickHandler={handleClick} value="abc" title="abc" />
        <Button onClickHandler={handleClick} value="pqrs" title="pqrs" />
        <Button onClickHandler={handleClick} value="xyz" title="xyz"  />
        <Button onClickHandler={handleClick} value="efg" title="efg" />
      </div>
    </div>
  );
};

export default Recommended;
