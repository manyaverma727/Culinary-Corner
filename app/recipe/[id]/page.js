'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import './details.css';
import Image from 'next/image';

export default function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`https://dummyjson.com/recipes/${id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setRecipe(data);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Loading recipe...</p>;
  if (!recipe) return <p>No recipe found.</p>;

  return (
    <div className="recipe-container">
      <h1>{recipe.name}</h1>
      <img src={recipe.image} alt={recipe.name} height={100} width={100} />
      <div className="recipe-info">
        <span>Difficulty: {recipe.difficulty}</span>
        <span>Prep: {recipe.prepTimeMinutes} min</span>
        <span>Cook: {recipe.cookTimeMinutes} min</span>
      </div>

      <div className="recipe-section">
        <h2>Ingredients</h2>
        <ul>
          {recipe.ingredients?.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>
      </div>

      <div className="recipe-section">
        <h2>Instructions</h2>
        <ol>
          {recipe.instructions?.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}