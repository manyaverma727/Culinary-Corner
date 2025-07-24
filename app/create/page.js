'use client';

import React, { useState } from 'react';
import "../../styles/create.css";

export default function CreateRecipePage() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      title,
      description,
      ingredients: ingredients.split(','),
      steps: steps.split('.')
    });
    alert("Recipe submitted (not saved yet – no backend)");
  };

  return (
    <div className="create-page">
      <h1>Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Recipe Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <textarea
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
        <textarea
          placeholder="Steps (separated by periods)"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />
        <button type="submit">Submit Recipe</button>
      </form>
    </div>
  );
}