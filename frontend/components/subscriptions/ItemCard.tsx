import React from 'react'

const ItemCard = () => {
  return (
    <>
      <div className='my-1 p-2 hover:bg-hover-color rounded flex items-center cursor-pointer'>
        <div className='mr-1 w-[35px] h-[35px] flex justify-center items-center bg-input-field-background rounded'>
          <p className="rounded">🏠</p>
        </div>
        <div className='ml-1'>
          <p className=''>Namecheap</p>
          <p className='mt-1 text-sm text-slate-500'>Nov 27, 2024</p>
        </div>
      </div>
    </>
  )
}

export default ItemCard;