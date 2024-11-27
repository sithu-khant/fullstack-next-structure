import CategorySidebar from '@/components/subscriptions/CategorySidebar';
import Item from '@/components/subscriptions/Item';
import ItemsSidebar from '@/components/subscriptions/ItemsSidebar';
import React from 'react';

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