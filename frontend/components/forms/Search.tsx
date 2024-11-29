import React from 'react';

const Search = ({ ref, filteredText, setFilteredText, setIsSearch }: any) => {

  const handleChange = (e: any) => {

    setFilteredText(e.target.value);

  }

  const handleClear = () => {

    setFilteredText("");
    setIsSearch(false);
  }

  return (
    <>
      <div className='pb-2'>
        <div ref={ref} className='relative'>
          <input
            type="text"
            value={filteredText}
            className='w-full p-1 px-2 my-2 rounded-lg text-sm bg-input-field-background border border-slate-50'
            onChange={handleChange}
            placeholder='Search subscription'
          />

          <i
            className='pi pi-times search-input-icon'
            onClick={handleClear}
          >
          </i>
        </div>
      </div>
    </>
  )
}

export default Search;