import Image from "next/image";
import Hero from './../components/Hero/Hero.jsx';
import {NavbarSimple} from './../components/Common/Navbar.jsx';
import Customer from './../components/Customer/CustomerList.jsx';
import Service from "./../components/Service/Service.jsx";
import Footer from "./../components/Common/Footer.jsx";
import Steps from "./../components/Steps/Steps.jsx";
import MostPopularDrones from './../components/MostPopularDrones/MostPopularDrones.jsx'
import Video from './../components/Video/Video.jsx';
//import Footer from './../components/Common/Footer.jsx';
export default function Home() {
  const customers = [
    {
      name: 'Aarav Patel',
      imageSrc: 'https://images.unsplash.com/photo-1622219809260-ce065fc5277f?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMwNjYxOQ&ixlib=rb-1.2.1&q=85',
      description: 'Advanced drone technology for precise aerial surveillance. Reliable and efficient for all your management needs. Superior performance in dynamic environments.'
    },
    {
      name: 'Isha Sharma',
      imageSrc: 'https://images.unsplash.com/photo-1488161628813-04466f872be2?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTMwNQ&ixlib=rb-1.2.1&q=85',
      description: 'Cutting-edge drones with enhanced stability and control. Ideal for complex management tasks. Ensure high-quality data and seamless operation in all conditions.'
    },
    {
      name: 'Arjun Rao',
      imageSrc: 'https://images.unsplash.com/photo-1456885284447-7dd4bb8720bf?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNTQzNA&ixlib=rb-1.2.1&q=85',
      description: 'High-performance drones equipped for effective management and monitoring. Reliable and versatile for various applications. Optimize your operations with features.'
    },
    {
      name: 'Neha Desai',
      imageSrc: 'https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxNjA1MA&ixlib=rb-1.2.1&q=85',
      description: 'Efficient drone solutions for precise management. Enhance your productivity with state-of-the-art technology. Experience reliable performance and high-quality results.'
    }
  ];
  


  return (
    <div>
      <NavbarSimple />
    <Hero />
    <Service />
    <MostPopularDrones />    
    <Steps />
    <Video />
    <Customer  customers={customers} />
    <Footer />
    </div>
  );
}

