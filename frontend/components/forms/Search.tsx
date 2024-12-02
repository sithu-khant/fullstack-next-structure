import React from 'react';

const Search = ({ ref, filteredText, setFilteredText, isSearching, setIsSearching }: any) => {

  const handleChange = (e: any) => {

    setFilteredText(e.target.value);

  }

  const handleClear = () => {

    setFilteredText("");
    setIsSearching(!isSearching);
  }

  return (
    <>
      <div className='pb-2'>
        <div ref={ref} className='relative'>
          <input
            type="text"
            value={filteredText}
            className='input-field text-sm'
            onChange={handleChange}
            placeholder='Search subscriptions'
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