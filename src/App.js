import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  const [data , setData] = useState(items)
  const [categories , setCategories] = useState(allCategories)

  const filterCategory = (category) => {
    if(category === 'all'){
      return setData(items)
    }
    const filter = items.filter(item => item.category === category)
    setData(filter)
  }
  return (
    <main>
      <section className='manu section'>
        <div className='title'>
          <h2>Our Menu</h2>
          <div className='underline'></div>
        </div>
      </section>
      <Categories categories={categories} filterCategory={filterCategory}/>
      <Menu items={data} />
    </main>
  )
}

export default App;
