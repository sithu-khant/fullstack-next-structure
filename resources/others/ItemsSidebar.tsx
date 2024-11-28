"use client";

import React, { useRef, useState } from 'react'
import TooltipUtils from '../utils/TooltipUtils';
import { TieredMenu } from 'primereact/tieredmenu';
import { subItemsSidebarItems } from '@/constants';
import ItemCard from "./ItemCard";

const ItemsSidebar = ({ clickNewItem, setClickNewItem }: any) => {

  const itemsSidebarMenu: any = useRef(null);

  const handleSortAtoZ = () => { };
  const handleSortZtoA = () => { };

  return (
    <>
      <div className='w-[260px] h-screen overflow-y-scroll scrollbar-thin border border-y-0 border-l-0 p-2'>
        <div className='my-2 p-1 flex items-center justify-between'>
          <p className='font-bold text-slate-600'> 🏠 Category Name</p>
        </div>

        <div>

          <p className='text-sm font-semibold text-slate-500 ml-2'>A</p>
          <ItemCard />
          <ItemCard />

          <p className='text-sm font-semibold text-slate-500 ml-2'>B</p>
          <ItemCard />
          <ItemCard />
          <ItemCard />

          <p className='text-sm font-semibold text-slate-500 ml-2'>C</p>
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />
          <ItemCard />

        </div>

      </div>
    </>
  )
}

export default ItemsSidebar;