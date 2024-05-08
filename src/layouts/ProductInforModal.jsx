import React, { useState } from 'react'

const ProductInforModal = ({ productInfo, handleCloseInfo }) => {
  const [product] = useState(productInfo)
  return (
    <div className='w-screen h-screen fixed top-0 left-0 bg-opacity-50 bg-blue overflow-hidden'>
      <div className='w-[380px] h-auto p-4 bg-[#fff] shadow-md rounded-md absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
        <div className='grid grid-cols-2 relative pt-5'>
          <i
            onClick={handleCloseInfo}
            className='pi pi-times-circle text-rose-500 absolute top-0 left-[100%] translate-x-[-100%]'
          ></i>
          <img
            src={product.image}
            alt='product image'
            className='w-[120px] h-[120px] scale-[.8]'
          />
          <div className='flex flex-col '>
            <h1 className='text-f14'>{product.name}</h1>
            <h3 className='text-12 text-pink font-bold'>₦{product.price}</h3>
            <p className='text-f10'>{product.description}</p>
            <div className='flex justify-between items-center w-[50px]'>
              <a href='https://wa.me/2348050500466'>
                <i className='pi pi-whatsapp text-green'></i>
              </a>
              <a href='tel:+2348050500466'>
                <i className='pi pi-phone text-indigo-500'></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductInforModal
