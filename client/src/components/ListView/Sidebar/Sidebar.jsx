import Category from "./Category/Category";
import Price from "./Price/Price";
import Memory from "./Memory/Memory";

const Sidebar = ({ handleChange }) => {
  return (
    <div className="">
      <section className="fixed inset-y-20  left-0 w-1/6 bg-white border-r-2 border-gray-300 flex flex-col items-center z-10">
        <div className="py-4 md:py-8">
          <h1 className="text-center font-bold text-3xl">🛒</h1>
        </div>
        <div className="flex-1 overflow-y-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
          <Category handleChange={handleChange} />
          <Price handleChange={handleChange} />
          <Memory handleChange={handleChange} />
        </div>
      </section>
    </div>
  );
};

export default Sidebar;
