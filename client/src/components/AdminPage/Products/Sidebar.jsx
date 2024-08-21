import { useState } from 'react';

const Sidebar = () => {
  const [productsFetched, setProductsFetched] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleToggleFetch = () => {
    setProductsFetched(prev => !prev);
  };

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col items-center p-4">
      <button
        onClick={handleToggleFetch}
        className={`mb-4 px-4 py-2 rounded ${productsFetched ? 'bg-red-500' : 'bg-blue-500'}`}
      >
        {productsFetched ? 'Close' : 'My Products'}
      </button>
      <button
        onClick={() => setShowForm(prev => !prev)}
        className={`px-4 py-2 rounded ${showForm ? 'bg-red-500' : 'bg-green-500'}`}
      >
        {showForm ? 'Close Form' : 'Add My Product'}
      </button>
    </div>
  );
};

export default Sidebar;
