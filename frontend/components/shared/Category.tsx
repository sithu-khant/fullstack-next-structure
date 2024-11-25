import React from 'react'

const Category = () => {
  return (
    <>
      <div className='flex items-center justify-between text-slate-700 hover:text-slate-800 hover:bg-slate-50 cursor-pointer p-1 rounded'>

        <div className='flex items-center'>
          <p className='px-1 pr-2'>🏠</p>
          <p className='text-sm'>Personal</p>
        </div>

        <div>
          <i className="pi pi-ellipsis-v p-1 text-sm text-slate-600 hover:text-text-color cursor-pointer"></i>
        </div>

      </div>
    </>
  )
}

export default Category;