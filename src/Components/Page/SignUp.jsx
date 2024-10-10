import React, { useState } from 'react'
import Container from '../Layer/Container'
import Bredcumb from '../Layer/Bredcumb'
import TitleHeader from '../Layer/TitleHeader'
import Input from '../Layer/Input'
import Button from '../Layer/Button'
import { FaEye, FaEyeSlash } from 'react-icons/fa'

const SignUp = () => {

    let Divison= ["Barishal", "Chattogram", "Dhaka", "Khulna", "Rajshahi", "Rangpur", "Mymensingh", "Sylhet"]

    const District = [
        "Bagerhat",
        "Bandarban",
        "Barguna",
        "Barisal",
        "Bhola",
        "Bogra",
        "Brahmanbaria",
        "Chandpur",
        "Chapai Nawabganj",
        "Chattogram",
        "Chuadanga",
        "Cox's Bazar",
        "Cumilla",
        "Dhaka",
        "Dinajpur",
        "Faridpur",
        "Feni",
        "Gaibandha",
        "Gazipur",
        "Gopalganj",
        "Habiganj",
        "Jamalpur",
        "Jashore",
        "Jhalokathi",
        "Jhenaidah",
        "Joypurhat",
        "Khagrachari",
        "Khulna",
        "Kishoreganj",
        "Kurigram",
        "Kushtia",
        "Lakshmipur",
        "Lalmonirhat",
        "Madaripur",
        "Magura",
        "Manikganj",
        "Meherpur",
        "Moulvibazar",
        "Munshiganj",
        "Mymensingh",
        "Naogaon",
        "Narail",
        "Narayanganj",
        "Narsingdi",
        "Natore",
        "Netrokona",
        "Nilphamari",
        "Noakhali",
        "Pabna",
        "Panchagarh",
        "Patuakhali",
        "Pirojpur",
        "Rajbari",
        "Rajshahi",
        "Rangamati",
        "Rangpur",
        "Satkhira",
        "Shariatpur",
        "Sherpur",
        "Sirajganj",
        "Sunamganj",
        "Sylhet",
        "Tangail",
        "Thakurgaon"
      ];

      let [show1,setShow1]= useState(false);
      let [show2,setShow2]= useState(false);
      



  return (


    <div>
        <Container className='pt-[124px] pb-[140px]'>
            <Bredcumb/>

            <div className='border-b mt-[127px] '>
                <p className='font-DM text-[16px] text-[#767676] w-[644px] pb-[62px]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
            </div>

            <div className='mt-[57px] flex flex-wrap gap-x-10 gap-y-6 border-b pb-[69px]'>
                <TitleHeader className='mb-[42px]  w-full' headerText='Your Personal Details'/>
                <Input
                 className='w-[507px]' 
                 id='FirstName' 
                 labelText='First Name' 
                 type='text' 
                 placeholder='First Name' />

                <Input
                 className='w-[507px]' 
                 id='LastName' 
                 labelText='Last Name' 
                 type='text' 
                 placeholder='Last Name' />


                <Input
                 className='w-[507px]' 
                 id='FirstName' 
                 labelText='Email address' 
                 type='text' 
                 placeholder='company@domain.com' />

                <Input
                 className='w-[507px]' 
                 id='Telephone' 
                 labelText='Telephone' 
                 type='text' 
                 placeholder='Your phone number' />



            </div>


            <div className='mt-[57px] flex flex-wrap gap-x-10 gap-y-6 border-b pb-[69px]'>
                <TitleHeader className='w-full' headerText='New Customer' />

                <Input
                 className='w-[507px]' 
                 id='Address1' 
                 labelText='Address 1' 
                 type='text' 
                 placeholder='4279 Zboncak Port Suite 6212' />

                <Input
                 className='w-[507px]' 
                 id='Address2' 
                 labelText='Address 2' 
                 type='text' 
                 placeholder='-' />


                <Input
                 className='w-[507px]' 
                 id='City' 
                 labelText='City' 
                 type='text' 
                 placeholder='Your city' />


                <Input
                 className='w-[507px]' 
                 id='PostCode' 
                 labelText='Post Code' 
                 type='text' 
                 placeholder='05228' />

                
                
                <div className='border-b w-[507px]'>
                <label className='font-DM font-bold text-[16px]' htmlFor=''>Divison</label>
        
                <select className='font-DM text-[14px] text-[#767676] w-full outline-none pt-2.5 pb-4' id="Divison">
                    <option  value="Please select">Please select</option>

                    {
                        Divison.map((item,index)=>
                            <option key={index} value={item}>{item}</option>
                        )
                  }

                </select>

                </div>

                <div className='border-b w-[507px]'>
                <label className='font-DM font-bold text-[16px]' htmlFor=''>District</label>
        
                <select className='font-DM text-[14px] text-[#767676] w-full outline-none pt-2.5 pb-4' id="Divison">
                    <option  value="Please select">Please select</option>

                    {
                        District.map((item,index)=>
                            <option key={index} value={item}>{item}</option>
                        )
                  }
                </select>

                </div>
            


            </div>


            <div className='mt-[57px] flex flex-wrap gap-x-10 gap-y-6 border-b pb-[69px]'>
                <TitleHeader className='mb-[42px]  w-full' headerText='Your Password'/>
                <Input
                 className='w-[507px] relative' 
                 id='Password' 
                 labelText='Password' 
                 type={`${show1? "text":"password"}`} 
                 placeholder='Password' >
                     {
                        show1?<FaEye onClick={()=>setShow1(!show1)} className='absolute top-1/2 right-3 -translate-y-1/2 text-[#767676]' />:
                   
                   <FaEyeSlash onClick={()=>setShow1(!show1)}  className='absolute top-1/2 right-3 -translate-y-1/2 text-[#767676]'  />}


                    </Input>

                <Input
                 className='w-[507px] relative' 
                 id='RepeatPassword' 
                 labelText='Repeat Password' 
                 type={`${show2? "text":"password"}`} 
                 placeholder='Repeat Password'>

                    
                        {
                        show2?<FaEye onClick={()=>setShow2(!show2)} className='absolute top-1/2 right-3 -translate-y-1/2 text-[#767676]' />:
                   
                   <FaEyeSlash onClick={()=>setShow2(!show2)}  className='absolute top-1/2 right-3 -translate-y-1/2 text-[#767676]'  />}

                        
                    
                    
                 </Input>
                 
            </div>


                

            <div className=' flex flex-col gap-y-6 mt-[65px] font-DM text-[#767676]'>
                
            <div>
                <input className='relative appearance-none w-2.5 h-2.5 border border-[#767676] bg-transparent after:absolute after:content-[""] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:border  after:border-white after:bg-[#767676] after:opacity-0 checked:after:opacity-100'  id="Yes" name="Policy" type="checkbox" />
            <label className='ml-4' for="">I have read and agree to the Privacy Policy</label>
            </div>


            <div >
                <label for="">Subscribe Newsletter</label>
            <input className='ml-8 mr-4  relative appearance-none w-2.5 h-2.5 border border-[#767676] bg-transparent after:absolute after:content-[""] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:border  after:border-white after:bg-[#767676] after:opacity-0 checked:after:opacity-100'  id="Yes" name="Subscribe Newsletter" type="radio"  />
            <label for="Yes">Yes</label>

            <input className='ml-10 mr-4  relative appearance-none w-2.5 h-2.5 border border-[#767676] bg-transparent after:absolute after:content-[""] after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-2 after:h-2 after:border  after:border-white after:bg-[#767676] after:opacity-0 checked:after:opacity-100'  id="No" name="Subscribe Newsletter" type="radio"   />
            <label for="No">No</label>
            </div>

            <Button className='w-[200px] text-[#262626]' ButtonText='Log in'/>

            
            
            </div>
            
            





        </Container>
    </div>
  )
}

export default SignUp