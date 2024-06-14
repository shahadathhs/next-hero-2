"use client"

import Image from 'next/image';
import React, { useState } from 'react';

const MealsSearch = () => {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadData = async () => {
    if (search === '') return;
    
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await res.json();
      setMeals(data.meals || []);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handler = (e) => {
    setSearch(e.target.value);
  };

  const handleSearchClick = () => {
    loadData();
  };

  return (
    <div className='p-3 '>
      <input 
        onChange={handler}
        type="text" 
        placeholder='Search meal' 
        value={search}
        className='border-transparent p-2'
      />
      <button 
        onClick={handleSearchClick}
        className='p-2 bg-green-400'
      >
        Search
      </button>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className='mt-12 p-4 grid grid-cols-3 gap-3'>
        {
          meals?.map(meal =>
            <div key={meal.idMeal} className='border-2 rounded-md p-5'>
              <Image src={meal.strMealThumb} alt='mealThumb' width={500} height={400} />
              <p>This is meal </p>
              <p>Name: {meal.strMeal} </p>
              <p>Description: {meal.strInstructions} </p>
            </div>
          )
        }
      </div>
    </div>
  );
};

export default MealsSearch;
