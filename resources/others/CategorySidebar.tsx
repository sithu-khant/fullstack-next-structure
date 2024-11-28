"use client"

import React, { useRef, useState } from 'react'
import Category from './CategoryCard';
import { TieredMenu } from 'primereact/tieredmenu';
import { categorySidebarItems } from '@/constants';
import CategoryInputField from '../forms/CategoryInputField';

const CategorySidebar = () => {

  const categorySidebarMenu: any = useRef(null);
  const [toggleInputField, setToggleInputField] = useState(false);

  const handleTableView = () => { };
  const handleTrash = () => { };

  return (
    <>
      <div className='w-[220px] h-screen overflow-y-scroll scrollbar-thin border border-y-0 border-l-0 p-2'>
        <div className='mt-1 p-1 flex items-center justify-end'>

          <div className='flex items-center bg-secondary-color text-input-field-background mr-1 px-3 py-1 cursor-pointer rounded-md'>
            <i className="pi pi-plus mr-2 text-xs" style={{ fontWeight: "800" }}></i>
            <p className='text-sm'>New Item</p>
          </div>

          <div>
            <TieredMenu model={categorySidebarItems({ handleTableView, handleTrash })} popup ref={categorySidebarMenu} breakpoint="28px" />
            <i
              className="pi pi-ellipsis-v p-1 pl-2 text-sm text-slate-600 cursor-pointer"
              onClick={(e) => categorySidebarMenu.current.toggle(e)}
            ></i>
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