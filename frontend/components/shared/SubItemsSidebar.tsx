"use client";

import React, { useRef } from 'react'
import TooltipUtils from '../utils/TooltipUtils';
import { TieredMenu } from 'primereact/tieredmenu';
import { subItemsSidebarItems } from '@/constants';
import SubItemCard from "./SubItemCard";

const ItemsSidebar = () => {

  const categorySidebarMenu: any = useRef(null);

  const handleSortAtoZ = () => { };
  const handleSortZtoA = () => { };

  return (
    <>
      <div className='w-[240px] h-screen overflow-y-scroll scrollbar-thin border border-y-0 border-l-0 p-2'>
        <div className='mb-1 p-1 flex items-center justify-between'>
          <p className='font-bold text-slate-600'> 🏠 Category</p>

          <div className='flex items-center border rounded'>
            <TooltipUtils target='.create-category-icon' content='Create category' />
            <i
              className="create-category-icon pi pi-plus p-2 text-sm text-slate-500 cursor-pointer"
            >
            </i>

            <TieredMenu model={subItemsSidebarItems({ handleSortAtoZ, handleSortZtoA })} popup ref={categorySidebarMenu} breakpoint="28px" />
            <i
              className="pi pi-ellipsis-v p-1 text-sm text-slate-600 cursor-pointer"
              onClick={(e) => categorySidebarMenu.current.toggle(e)}
            >
            </i>
          </div>
        </div>

        <div>

          <SubItemCard />

        </div>

      </div>
    </>
  )
}

export default ItemsSidebar;