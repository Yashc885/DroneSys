'use client'
import {useEffect , useState} from 'react';
import axios from 'axios' ;
import { useParams } from 'next/navigation';
import Product from '../../../components/Product/Product';
// import data from '../../../components/ListView/db/data.js'; 
import {NavbarSimple} from "../../../components/Common/Navbar.jsx";
const ProductPage = () => {
    const { title } = useParams(); 

    // const normalizeTitle = (title) => {
    //     return title
    //         .replace(/_/g, ' ')         
    //         .toLowerCase()              
    //         .replace(/\s+/g, ' ')        
    //         .trim();                     
    // };
    // const normalizedTitle = normalizeTitle(title);
     const[ProductIndfo , SetProductInfo] = useState();
  
      const drone = ''
    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await axios.get(`/api/drone-services?title=${title}`);
            // console.log(response.data); 
            SetProductInfo(response.data[0]);
            // drone = (response.data)
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        };
    
        fetchData();
      }, []);
  
    
      

    // console.log("Title from URL:", title); 
    // console.log("Normalized Title:", normalizedTitle); 
    // console.log("Data available:", data); 

  
    // const drone = data.find(item => normalizeTitle(item.title) === normalizedTitle);

    // console.log("Data Titles for Matching:");
    // data.forEach(item => console.log(`Data Title: ${item.title}, Normalized: ${normalizeTitle(item.title)}`));

    return (
        <div>
            <NavbarSimple />
            <div className="py-4 md:py-8">
            <Product drone={ProductIndfo} />
            </div>
        </div>
    );
}

export default ProductPage;
