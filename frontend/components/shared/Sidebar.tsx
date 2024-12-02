import React, { useRef, useState } from 'react';

import { useClickOutside } from 'primereact/hooks';
import { useIntersectionObserver } from 'primereact/hooks';

import { sidebarMenuItems } from '../utils/menuItems';
import ItemCard from './ItemCard';
import { handleSortItems } from '../utils/handleSort';
import CustomTieredMenu from '../utils/CustomTieredMenu';
import Search from '../forms/Search';
import FormDialog from '../forms/FormDialog';

const Sidebar = () => {

  const hrRef = useRef(null);
  const hrVisible = useIntersectionObserver(hrRef);
  const searchRef = useRef(null);
  const [isSearch, setIsSearch] = useState(false);
  const [filteredText, setFilteredText] = useState("");
  const [clickForm, setClickForm] = useState(false);

  const handleTableView = () => { };

  const handleSearch = () => {
    setIsSearch(!isSearch);
  };

  const handleTrash = () => { };

  useClickOutside(searchRef, () => {
    setIsSearch(false);
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
              <CustomTieredMenu icon={"pi-sort-amount-down"} model={handleSortItems({ handleTableView })} />
              <CustomTieredMenu icon={"pi-ellipsis-v"} model={sidebarMenuItems({ handleTableView, handleSearch, handleTrash })} />
            </div>

          </div>

          <div className='mx-2'>
            {isSearch && <Search ref={searchRef} filteredText={filteredText} setFilteredText={setFilteredText} setIsSearch={setIsSearch} />}
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

      </div>
    </>
  )
}

export default Sidebar;