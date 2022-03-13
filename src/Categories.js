import React from 'react';

const Categories = ({categories , filterCategory}) => {
  return (
    <div className='btn btn-container'>
      {categories.map((category , index) => (
        <button className='filter-btn' type='button' key={index} onClick={() => filterCategory(category)}>{category}</button>
      ))}
    </div>
  )
};

export default Categories;
