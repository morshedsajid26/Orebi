import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import ProductCard from '../Layer/ProductCard'


import VerticalProductCard from '../VerticalProductCard';


// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];

 






const Paginate = ({itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState(0);
    const [items, setItems] = useState([]);

    useEffect(()=>{
      const getData = async ()=>{
        
        const response = await fetch('https://dummyjson.com/products')
        const data = await response.json()
        
        setItems(data.products );
      }
      getData()
    },[])



    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);
  
    const handlePageClick = (event) => {
      const newOffset = (event.selected * itemsPerPage) % items.length;
      setItemOffset(newOffset);
    };
  
    return (
      <>
        <div className='flex justify-between flex-wrap gap-y-12 gap-x-10'>
        <Items  currentItems={currentItems} />
        </div>
         
         <div className='flex justify-between items-end'>
         <ReactPaginate
          breakLabel="..."
          nextLabel=""
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          previousLabel=""
          renderOnZeroPageCount={null}
          pageClassName="page-item liCSS h-9 w-9 border-[1px] border-[#D8D8D8] text-[#767676] font-DM"
           pageLinkClassName="page-link aTag h-full w-full flex items-center justify-center"
           containerClassName="pagination UlCSS flex gap-4 mt-[50px]"
           activeClassName="active bg-[#262626] text-[#FFFFFF] border-[1px] border-transparent"

           previousClassName="page-item hidden "
           nextClassName="page-item  hidden"

    
        />

        <p className='font-DM text-[14px] text-[#767676]'>Products from {`${itemOffset + 1 } to ${endOffset > items.length ? items.length : endOffset} of ${items.length}`}</p>
         </div>
      </>
    );
  };

  let  Items=({ currentItems })=> {
    let [show,setShow]=useState(true)
      return (
        <>
          {currentItems &&
            currentItems.map((item,i) => (
              show?
                
              
              
          <ProductCard key={i} Pclass=''
             src={item.thumbnail} 
             pName={item.title} 
             price={item.price} 
             colour={item.brand} 
             offer={item.discountPercentage} />:

              <VerticalProductCard  
              src={item.thumbnail} 
              pName={item.title} 
              price={item.price} 
              colour={item.brand} 
              ffer={item.discountPercentage}/>
  
              
  
              
            ))}
        </>
      );
    }; 


export default Paginate