import React from "react";

export default function RecipeCard({ title, image }) {
  return (
    <div className="bg-[#2a2a2a] text-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm hover:shadow-xl transition-shadow duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-xl">{title}</h3>
      </div>
    </div>
  );
}