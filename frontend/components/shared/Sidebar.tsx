import React, { useRef, useState } from 'react';

import { useClickOutside } from 'primereact/hooks';
import { useIntersectionObserver } from 'primereact/hooks';

import { sidebarMenuItems } from '../utils/menuItems';
import ItemCard from './ItemCard';
import CustomTieredMenu from '../utils/CustomTieredMenu';
import Search from '../forms/Search';
import FormDialog from '../forms/FormDialog';

const Sidebar = () => {

  const hrRef = useRef(null);
  const hrVisible = useIntersectionObserver(hrRef);
  const searchRef = useRef(null);
  const [isSearching, setIsSearching] = useState(false);
  const [filteredText, setFilteredText] = useState("");
  const [clickForm, setClickForm] = useState(true);

  const handleTrash = () => { };

  useClickOutside(searchRef, () => {
    setIsSearching(false);
    setFilteredText("");
  });

  return (
    <>
      <div className='w-[480px] h-screen overflow-y-scroll scrollbar-thin bg-background-color'>
        <hr className='border-background-color mb-1' ref={hrRef} />

        <div className={`${hrVisible ? "" : "sticky top-0 bg-background-color shadow-sm"}`}>

          <div className='p-1 py-2 flex items-center justify-end'>

            <div
              className='new-item-button'
              onClick={() => setClickForm(true)}
            >
              <i className="pi pi-plus mr-2 text-xs" style={{ fontWeight: "800" }}></i>
              <p className='text-sm'>New Item</p>
            </div>

            <FormDialog clickForm={clickForm} setClickForm={setClickForm} />

            <div>
              <i
                className={`pi pi-search menu-icon ${isSearching && "bg-hover-color"}`}
                style={{ fontWeight: "800" }}
                onClick={() => { setIsSearching(true) }}
              >
              </i>
              <CustomTieredMenu icon={"pi-ellipsis-v"} model={sidebarMenuItems({ handleTrash })} />
            </div>

          </div>

          <div className='mx-2'>
            {isSearching && (
              <Search
                ref={searchRef}
                filteredText={filteredText}
                setFilteredText={setFilteredText}
                isSearching={isSearching}
                setIsSearching={setIsSearching}
              />
            )}
          </div>
        </div>

        <div className='mx-2 p-3'>

          <p className='text-sm font-semibold text-slate-500 ml-2'>Favorites</p>
          <ItemCard />
          <ItemCard />
          <ItemCard />

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

      </div >
    </>
  )
}

export default Sidebar;