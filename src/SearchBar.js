import React from 'react';

const SearchBar = (props) => {
  return (
    <div>
      <label>search: </label>
      <input
        onChange={(e) => {
          //foodlist is an array of objects, so mapping through
          //will give me a single element of the array which is
          //an object. So i must specify the key to apply methods
          //such as tolowercase and includes
          const newList = props.foodList.filter((singleFood) => {
            return singleFood.name
              .toLowerCase()
              .includes(e.target.value.toLowerCase());
          });
          props.updateList(newList);
        }}
      />
    </div>
  );
};

export default SearchBar;
