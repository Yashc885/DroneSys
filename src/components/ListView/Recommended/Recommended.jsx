import Button from "../Button";

const Recommended = ({ handleClick }) => {
  return (
    <div className="mx-4 md:mx-10 my-5"> 
      <h2 className="ml-4 md:ml-10 mb-2 md:mb-5 mt-5 text-xl md:text-2xl font-extrabold">Recommended</h2>
      <div className="flex flex-wrap ml-4 md:ml-10      space-x-4 md:space-x-6"> 
        <Button onClickHandler={handleClick} value="" title="All Products" className="border border-gray-400 rounded-lg px-4 py-2" />
        <Button onClickHandler={handleClick} value="Nike" title="Nike" className="border border-gray-400 rounded-lg px-4 py-2" />
        <Button onClickHandler={handleClick} value="Adidas" title="Adidas" className="border border-gray-400 rounded-lg px-4 py-2" />
        <Button onClickHandler={handleClick} value="Puma" title="Puma" className="border border-gray-400 rounded-lg px-4 py-2" />
        <Button onClickHandler={handleClick} value="Vans" title="Vans" className="border border-gray-400 rounded-lg px-4 py-2" />
      </div>
    </div>
  );
};

export default Recommended;
