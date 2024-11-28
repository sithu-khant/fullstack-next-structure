"use client"

import React, { useRef, useState } from 'react'
import Category from './CategoryCard';
import { TieredMenu } from 'primereact/tieredmenu';
import TooltipUtils from '../utils/TooltipUtils';
import { categorySidebarItems } from '@/constants';
import CategoryInputField from '../forms/CategoryInputField';

const CategorySidebar = () => {

  const categorySidebarMenu: any = useRef(null);
  const [toggleInputField, setToggleInputField] = useState(false);

  const handleSortAtoZ = () => { };
  const handleSortZtoA = () => { };
  const handleTrash = () => { };

  return (
    <>
      <div className='w-[220px] h-screen overflow-y-scroll scrollbar-thin border border-y-0 border-l-0 p-2'>
        <div className='mb-1 p-1 flex items-center justify-end'>
          {/* <p className='font-bold text-slate-600'>Category</p> */}

          <div className='flex items-center border rounded'>
            <TooltipUtils target='.create-category-icon' content='Create category' />
            <i
              className="create-category-icon pi pi-plus p-2 text-sm text-slate-500 cursor-pointer"
              onClick={() => setToggleInputField(!toggleInputField)}
            >
            </i>

            <TooltipUtils target='.category-table-view-icon' content='Table View' />
            <i className="category-table-view-icon pi pi-table p-2 text-sm text-slate-500 cursor-pointer"></i>

            <TieredMenu model={categorySidebarItems({ handleSortAtoZ, handleSortZtoA, handleTrash })} popup ref={categorySidebarMenu} breakpoint="28px" />
            <i
              className="pi pi-ellipsis-v p-1 text-sm text-slate-600 cursor-pointer"
              onClick={(e) => categorySidebarMenu.current.toggle(e)}
            >
            </i>
          </div>
        </div>

        <CategoryInputField toggleInputField={toggleInputField} setToggleInputField={setToggleInputField} />

        <div>

          <p className='text-sm font-semibold text-slate-600 ml-1 pt-3'>Favorites</p>
          <Category />
          <Category />
          <Category />
          <Category />

          <p className='text-sm font-semibold text-slate-500 m-1 pt-3'>All</p>
          <Category />
          <Category />
          <Category />
          <Category />
        </div>

      </div>
    </>
  )
}

export default CategorySidebar;