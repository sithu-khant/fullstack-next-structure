import React from 'react';
import CategorySidebar from '@/components/shared/CategorySidebar';
import Item from '@/components/shared/SubItem';
import ItemsSidebar from '@/components/shared/SubItemsSidebar';

const page = () => {
  return (
    <>
      <CategorySidebar />
      <ItemsSidebar />
      <Item />
    </>
  )
}

export default page;