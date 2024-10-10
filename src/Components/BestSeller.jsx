import React, { useEffect, useState } from 'react'
import Container from './Layer/Container'
import TitleHeader from './Layer/TitleHeader'
import ProductCard  from './Layer/ProductCard'

import product5 from '/Product/product 5.png'
import product6 from '/Product/product 6.png'
import product7 from '/Product/product 7.png'
import product8 from '/Product/product 8.png'

import axios from 'axios'

const BestSeller = () => {


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
   
    <div className='pt-[212px]'>
     <Container>
        <TitleHeader headerText='Best Seller'/>
    </Container>
    
    
    
    <Container className='flex justify-between mt-12 '>    
        
    {
                  items.filter((_,index)=> index >= 20 && index < 24)
                  
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

export default BestSeller