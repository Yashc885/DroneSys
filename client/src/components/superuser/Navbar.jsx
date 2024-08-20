import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="flex items-center justify-between w-full px-4 lg:px-8">
      <Link href="/superuser/home" className="flex items-center">
          <Image
            src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.2116175301.1719187200&semt=sph"
            alt="Logo"
            width={60}
            height={60}
            className="rounded-full"
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
