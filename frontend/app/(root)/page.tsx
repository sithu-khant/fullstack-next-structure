import CategorySidebar from '@/components/shared/CategorySidebar';
import IconSidebar from '@/components/shared/IconSidebar';
import Item from '@/components/shared/Item';
import ItemsSidebar from '@/components/shared/ItemsSidebar';
import React from 'react'

const page = () => {
  return (
    <>
      <div className='flex text-slate-700'>
        <IconSidebar />
        <CategorySidebar />
        <ItemsSidebar />
        <Item />
      </div>
    </>
  )
}

export default page;