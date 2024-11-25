import React from 'react'
import Category from './Category';

const CategorySidebar = () => {
  return (
    <>
      <div className='w-[220px] border border-y-0 border-l-0 p-2'>
        <div className='w-full p-1 flex items-center justify-end'>
          {/* <p className='font-bold text-slate-600'>Category</p> */}

          <div className='flex items-center border rounded'>
            <i className="pi pi-plus p-2 text-sm text-slate-500 cursor-pointer"></i>
            <i className="pi pi-ellipsis-v p-1 text-sm text-slate-600 cursor-pointer"></i>
          </div>
        </div>


        <div>
          <Category />
          <Category />
          <Category />
          <Category />
        </div>

        {/* <div className='flex items-center text-slate-500 rounded p-1 m-1 text-sm bg-slate-50 cursor-pointer  text-center'>
          <p className='font-bold mr-1'>New category</p>
          <i className="pi pi-plus text-xs text-dark-background"></i>
        </div> */}
      </div>
    </>
  )
}

export default CategorySidebar;