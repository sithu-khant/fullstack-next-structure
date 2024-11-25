"use client"

import React, { useRef } from 'react'
import Category from './Category';
import { TieredMenu } from 'primereact/tieredmenu';

const CategorySidebar = () => {

  const menu: any = useRef(null);
  const items = [
    {
      label: 'File',
      icon: 'pi pi-file',
      url: "/dashboard"
    },
    {
      label: 'Search',
      icon: 'pi pi-search',
      command: () => {
        console.log("Hello");
      }
    },
    {
      label: 'Share',
      icon: 'pi pi-share-alt',
      url: "/dashboard"

    }
  ];

  return (
    <>
      <div className='w-[220px] border border-y-0 border-l-0 p-2'>
        <div className='w-full mb-1 p-1 flex items-center justify-end'>
          {/* <p className='font-bold text-slate-600'>Category</p> */}

          <div className='flex items-center border rounded'>
            <i className="pi pi-plus p-2 text-sm text-slate-500 cursor-pointer"></i>

            <TieredMenu model={items} popup ref={menu} breakpoint="28px" />
            <i
              className="pi pi-ellipsis-v p-1 text-sm text-slate-600 cursor-pointer"
              onClick={(e) => menu.current.toggle(e)}
            >
            </i>
          </div>
        </div>


        <div>
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