"use client"

import React, { useState } from 'react';

import CategorySidebar from '@/components/subscriptions/CategorySidebar';
import Item from '@/components/subscriptions/Item';
import ItemsSidebar from '@/components/subscriptions/ItemsSidebar';
import SubscriptionForm from '@/components/forms/SubscriptionForm';

const page = () => {

  const [clickNewItem, setClickNewItem] = useState(false);

  return (
    <>
      <CategorySidebar />
      <ItemsSidebar clickNewItem={clickNewItem} setClickNewItem={setClickNewItem} />

      {clickNewItem ? (
        <SubscriptionForm />
      ) : (
        <Item />
      )}

    </>
  )
}

export default page;