import Button from "../Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="mx-4 md:mx-10 my-5"> 
      <h2 className="ml-4 md:ml-10 mb-2 md:mb-5 mt-5 text-xl md:text-2xl font-extrabold">Recommended</h2>
      <div className="flex flex-wrap ml-4 md:ml-10  space-x-4 md:space-x-6"> 
        <Button onClickHandler={handleClick} value="" title="All Products" className="border border-gray-400  text-xl md:text-2xl font-semibold rounded-lg px-4 py-2" />
        <Button onClickHandler={handleClick} value="abc" title="abc" className="border border-gray-400 text-xl md:text-2xl font-semibold  rounded-lg px-4 py-2" />
        <Button onClickHandler={handleClick} value="pqrs" title="pqrs" className="border border-gray-400 text-xl md:text-2xl font-semibold  rounded-lg px-4 py-2" />
        <Button onClickHandler={handleClick} value="xyz" title="xyz" className="border border-gray-400 text-xl md:text-2xl font-semibold   rounded-lg px-4 py-2" />
        <Button onClickHandler={handleClick} value="efg" title="efg" className="border border-gray-400 text-xl md:text-2xl font-semibold  rounded-lg px-4 py-2" />
      </div>
    </div>
  );
};

export default Recommended;
