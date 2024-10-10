import React, { useEffect, useState } from 'react'
import Container from './Layer/Container'
import TitleHeader from './Layer/TitleHeader'

import product9 from '/Product/product 9.png'
import product10 from '/Product/product 10.png'
import product11 from '/Product/product 11.png'
import product12 from '/Product/product 12.png'
import ProductCard from './Layer/ProductCard'

import axios from 'axios'

const SpeacialOffer = () => {



  const [items, setItems] = useState([]);


  useEffect(()=>{
    const getData = async ()=>{
      
      const response = await axios.get('https://dummyjson.com/products')
      // const data = await response.json()
      
      setItems(response.data.products );
    }
    getData()
  },[]);
  return (
    <div className='pb-[113px]'>
        <Container>
        <TitleHeader headerText='Speacial Offers'/>
        </Container>

        <Container className='flex justify-between mt-12'>
        {
                  items.filter((_,index)=> index >= 12 && index < 16)
                  
                  .map((item,i)=>(

                    <ProductCard key={i} Pclass=''
                            src={item.thumbnail} 
                            pName={item.title} 
                            price={item.price} 
                            colour={item.brand} 
                            offer={item.discountPercentage} />


                  ))
                  
                }
        </Container>

        
    </div>
    
  )
}

export default SpeacialOffer