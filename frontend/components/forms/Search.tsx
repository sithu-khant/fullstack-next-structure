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
            className='input-field text-sm'
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