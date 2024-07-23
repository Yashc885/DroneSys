const Button = ({ onClickHandler, value, title }) => {
    return (
      <button onClick={onClickHandler} value={value} className="border-2 hover:bg-red-500 hover:text-white hover:border-white border-gray-400 rounded-lg  font-bold p-2 ">
        {title}
      </button>
    );
  };
  
  export default Button;