import React from 'react'
import Container from '../Layer/Container'
import { FaSearch } from 'react-icons/fa'
import Button from '../Layer/Button'

const Error = () => {
  return (
    <div>
        <Container className='pt-20 pb-[140px]'>
           <div className='w-[652px]'>
           <h1 className='text-[200px] font-bold font-DM'>404</h1>

<p className='text-[16px] text-[#767676]'>
The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?
</p>

<div className='relative mt-[50px] mb-[60px]'>
<input className=' w-full py-5 px-5 outline-none bg-white border ' type="text" placeholder='Type to search'
                   />
                    <FaSearch className='absolute right-3 md:right-5 top-1/2 -translate-y-1/2 text-black' />
</div>
           </div>

           <Button
           ButtonText='Back to Home'
           className='w-[200px]'
           href='/'
           
           />
        </Container>
    </div>
  )
}

export default Error