
import { useState } from 'react'
import { MdDelete } from 'react-icons/md'

const ProductCart = () => {
    const [selectedQuantity,setSelectedQuantity]=useState(0);
  return (
    <div className='flex justify-between items-center mb-4 border-b-2 p-4 border-gray-400'>
        {/* right */}
        <div className='flex justify-start gap-4 items-center  '>
             <div className=' w-24 h-24'>
                 <img src="/public/images/pexels-photo-3965545.webp" className="w-full h-full rounded-md" alt="productImage" />
             </div>
            <div className='flex flex-col gap-2'>
                <h1 className='text-lg'>شنطة نسائية </h1>
                <h1 className='text-gray-400'>اكسسوارات</h1>
                <div className='flex flex-row-reverse justify-center gap-4 text-lg font-bold bg-white border rounded-lg   '>
                    <span className=' border-r-2  border-gray-300  text-gray-400 cursor-pointer text-center pr-2' onClick={()=>{
                        setSelectedQuantity((prev)=>prev+1)
                    }}>+</span>
                    <span className='text-center'>{selectedQuantity}</span>
                    <span className=' border-l-2  border-gray-300 text-gray-400 cursor-pointer text-center pl-2'onClick={()=>{
                        if(selectedQuantity>0){
                            setSelectedQuantity((prev)=>prev-1)
                        }
                        else{
                            setSelectedQuantity(0)
                        }
                    }}>-</span>
                </div>
            </div>
        </div>
        {/* right */}
        {/* left */}
           <div className='flex flex-col gap-10 '>
              <h1 className='text-lg text-gray-600 '>400 $</h1>
               <button className='cursor-pointer'>
                <MdDelete className='text-3xl text-red-600 hover:text-red-400'/>
               </button>
           </div>
        {/* left */}

    </div>
  )
}

export default ProductCart