"use client"

import React, { useRef, useState } from 'react'
import Category from './CategoryCard';
import { TieredMenu } from 'primereact/tieredmenu';
import TooltipUtils from '../utils/TooltipUtils';

import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import { categorySidebarItems } from '@/constants';

const CategorySidebar = () => {

  const categorySidebarMenu: any = useRef(null);
  const [emoji, setEmoji] = useState("");

  const handleEmojiSelect = (emoji: any) => {
    setEmoji(emoji.native);
  };

  return (
    <>
      <div className='w-[220px] border border-y-0 border-l-0 p-2'>
        <div className='w-full mb-1 p-1 flex items-center justify-end'>
          {/* <p className='font-bold text-slate-600'>Category</p> */}

          <div className='flex items-center border rounded'>
            <TooltipUtils target='.create-category-icon' content='Create category' />
            <i className="create-category-icon pi pi-plus p-2 text-sm text-slate-500 cursor-pointer"></i>

            <TooltipUtils target='.category-table-view-icon' content='Table View' />
            <i className="category-table-view-icon pi pi-table p-2 text-sm text-slate-500 cursor-pointer"></i>

            <TieredMenu model={categorySidebarItems} popup ref={categorySidebarMenu} breakpoint="28px" />
            <i
              className="pi pi-ellipsis-v p-1 text-sm text-slate-600 cursor-pointer"
              onClick={(e) => categorySidebarMenu.current.toggle(e)}
            >
            </i>
          </div>
        </div>

        <Picker
          data={data}
          onEmojiSelect={handleEmojiSelect}
          theme="light"
          previewPosition="none"
          maxFrequentRows="0"
        />
        <input type="text" value={emoji} readOnly />


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