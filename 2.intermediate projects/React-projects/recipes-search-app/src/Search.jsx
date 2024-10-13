import React, { useState } from 'react';
import axios from 'axios';

// Replace these with your API credentials you got from Edamam api website
const APP_ID = "YOUR_APP_ID";
const APP_KEY = "YOUR_APP_KEY";

export default function Search() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    setError('');
    try {
      const response = await axios.get(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=halal`);
      if (response.data.hits.length > 0) {
        setRecipes(response.data.hits);
      } else {
        setRecipes([]);
        setError('No recipes found. Try another search term.');
      }
    } catch (err) {
      setError('Something went wrong!');
    }
  };

  return (
    <div className="search-container">
      <h1>Halal Recipe Search</h1>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a Halal recipe..."
      />
      <button onClick={handleSearch}>Search</button>
      {error && <p className="error">{error}</p>}
      <div className="results">
        {recipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <h3>{recipe.recipe.label}</h3>
            <p>Calories: {Math.round(recipe.recipe.calories)}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">View Recipe</a>
          </div>
        ))}
      </div>
    </div>
  );
}