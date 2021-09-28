import React from "react";

const SearchBox = ({ searchChange }) => {
  return (
    <div className='pa2'>
      <input
        className='pa2 ba b--green bg-lightest-blue br-pill'
        type='search'
        placeholder='Search Users'
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
