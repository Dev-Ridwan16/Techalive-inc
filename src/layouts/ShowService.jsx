import React from 'react'

export const ShowService = ({ subCat, closeModal }) => {
  return (
    <div className='fixed w-screen h-screen top-0 left-0 bg-blue bg-opacity-20 z-[999]'>
      <div className='w-[350px] h-auto px-5 py-3 rounded-md bg-[#fff] absolute top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] z-[999]'>
        <h1 className=' text-f16'>{subCat.service}</h1>
        <i
          onClick={closeModal}
          className='pi pi-times-circle cursor-pointer text-f18 text-rose-500 absolute left-[95%] translate-x-[-95%] top-[20px]'
        />
        <ul className=' list-disc p-5'>
          {subCat &&
            subCat.sub_categories &&
            subCat.sub_categories.map((cat, i) => (
              <li>{cat.charAt(0).toUpperCase() + cat.slice(1)}</li>
            ))}
        </ul>
      </div>
    </div>
  )
}
