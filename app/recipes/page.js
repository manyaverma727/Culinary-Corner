'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import './recipes.css';

export default function RecipesPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('https://dummyjson.com/recipes');
        const data = await res.json();
        setRecipes(data.recipes || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching recipes:', error);
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

  const handleClick = (recipe) => {
    localStorage.setItem('selectedRecipe', JSON.stringify(recipe));
    router.push(`/recipe/${recipe.id}`);
  };

  if (loading) {
    return <div className="loading">Loading recipes...</div>;
  }

  return (
    <div className="recipes-page">
      <h1 className="page-title">Discover Delicious Recipes</h1>
      <div className="recipe-grid">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="recipe-card"
            onClick={() => router.push(`/recipe/${recipe.id}`)}
          >
            <img src={recipe.image} alt={recipe.name} className="recipe-image" />
            <div className="recipe-info">
              <h2 className="recipe-name">{recipe.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}