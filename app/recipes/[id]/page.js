'use client';

import { useEffect, useState } from 'react';
import './recipe.css';

export default function RecipeDetail({ params }) {
  const { id } = params;
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const data = localStorage.getItem('selectedRecipe');
    if (data) {
      const parsed = JSON.parse(data);
      if (parsed.id.toString() === id) {
        setRecipe(parsed);
        setLoading(false);
        return;
      }
    }

    const fetchRecipe = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`);
        const data = await res.json();
        setRecipe(data);
      } catch (error) {
        console.error('Failed to fetch recipe:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!recipe) return <div className="error">Recipe not found.</div>;

  return (
    <div className="recipe-detail-container">
      <div className="overlay">
        <div className="recipe-header">
          <h1>{recipe.name}</h1>
          <img src={recipe.image} alt={recipe.name} className="detail-image" />
        </div>

        <div className="info">
          <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
          <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
          <p><strong>Prep Time:</strong> {recipe.prepTimeMinutes} mins</p>
          <p><strong>Cook Time:</strong> {recipe.cookTimeMinutes} mins</p>
          <p><strong>Servings:</strong> {recipe.servings}</p>
          <p><strong>Calories:</strong> {recipe.caloriesPerServing} per serving</p>
          <p><strong>Rating:</strong> {recipe.rating} ⭐ ({recipe.reviewCount} reviews)</p>
        </div>

        <div className="section">
          <h2>Ingredients</h2>
          <ul>
            {recipe.ingredients.map((item, i) => <li key={i}>{item}</li>)}
          </ul>
        </div>

        <div className="section">
          <h2>Instructions</h2>
          <ol>
            {recipe.instructions.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
}