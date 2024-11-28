import React, { useRef } from 'react';

import { sidebarItems } from '@/constants';
import { TieredMenu } from 'primereact/tieredmenu';
import ItemCard from './ItemCard';

const Sidebar = () => {

  const categorySidebarMenu: any = useRef(null);
  const handleTableView = () => { };
  const handleTrash = () => { };

  return (
    <>
      <div className='w-[20%] h-screen overflow-y-scroll scrollbar-thin p-2 bg-background-color'>

        <div className='mt-1 p-1 flex items-center justify-end'>

          <div className='flex items-center bg-secondary-color text-input-field-background mr-1 px-3 py-1 cursor-pointer rounded-md'>
            <i className="pi pi-plus mr-2 text-xs" style={{ fontWeight: "800" }}></i>
            <p className='text-sm'>New Item</p>
          </div>

          <div>
            <TieredMenu model={sidebarItems({ handleTableView, handleTrash })} popup ref={categorySidebarMenu} breakpoint="28px" />
            <i
              className="pi pi-sort-amount-down p-1 pl-2 text-sm text-slate-600 cursor-pointer"
              onClick={(e) => categorySidebarMenu.current.toggle(e)}
            ></i>

            <TieredMenu model={sidebarItems({ handleTableView, handleTrash })} popup ref={categorySidebarMenu} breakpoint="28px" />
            <i
              className="pi pi-ellipsis-v p-1 pl-2 text-sm text-slate-600 cursor-pointer"
              onClick={(e) => categorySidebarMenu.current.toggle(e)}
            ></i>
          </div>

        </div>

        <div className='mx-2'>

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

export default Sidebar;