import { BsFillBagFill } from "react-icons/bs";
import Image from "next/image";
import { Button } from "./../ui/button.js";
import Link from "next/link";

const Card = ({ img, title, star, reviews, prevPrice, newPrice, move }) => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
       <Link href={`/product/${move}`} passHref>
        <Image
          src={img}
          alt={title}
          className="w-96 h-48 object-fill"
          width={500}
          height={300}
        />
      </Link>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex items-center mb-2">
          {[...Array(4)].map((_, index) => (
            <span key={index} className="text-yellow-500">{star}</span>
          ))}
          <span className="ml-2 text-gray-600">{reviews}</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-lg">
            <span className="line-through text-gray-500 mr-2">{prevPrice}</span>
            <span className="text-red-500 font-bold">${newPrice}</span>
          </div>
        </div>
        <Link href={`/booking/${move}`} passHref>
          <div className="flex items-center justify-center py-4">
            <Button
              type="button"
              size="xl"
              className="w-full max-w-xs cursor-pointer shadow-lg p-3 bg-rose-500 hover:bg-rose-600 rounded-xl text-base text-white font-bold"
            >
              Book
            </Button>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default Card;
