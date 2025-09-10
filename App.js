import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeCard = ({ recipe, onClick }) => (
  <div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 cursor-pointer"
    onClick={() => onClick(recipe)}
  >
    <img src={recipe.image} alt={recipe.name} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{recipe.name}</h3>
      <div className="flex justify-between text-sm text-gray-600">
        <p><span className="font-medium">Cuisine:</span> {recipe.cuisine}</p>
        <p><span className="font-medium">Difficulty:</span> {recipe.difficulty}</p>
      </div>
    </div>
  </div>
);

const RecipeDetail = ({ recipe, onBack }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative animate-fade-in-up">
       <button
        onClick={onBack}
        className="absolute top-4 right-4 bg-red-500 text-white rounded-full p-2 hover:bg-red-600 transition-colors z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div className="md:flex">
        <img src={recipe.image} alt={recipe.name} className="w-full md:w-1/2 h-64 md:h-auto object-cover md:rounded-l-2xl" />
        <div className="p-8 flex-1">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">{recipe.name}</h2>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mb-6">
            <div className="bg-emerald-100 text-emerald-800 p-3 rounded-lg">
              <p className="font-bold text-lg">{recipe.prepTimeMinutes}m</p>
              <p className="text-sm">Prep</p>
            </div>
            <div className="bg-sky-100 text-sky-800 p-3 rounded-lg">
              <p className="font-bold text-lg">{recipe.cookTimeMinutes}m</p>
              <p className="text-sm">Cook</p>
            </div>
            <div className="bg-rose-100 text-rose-800 p-3 rounded-lg">
              <p className="font-bold text-lg">{recipe.servings}</p>
              <p className="text-sm">Servings</p>
            </div>
             <div className="bg-yellow-100 text-yellow-800 p-3 rounded-lg">
              <p className="font-bold text-lg">{recipe.caloriesPerServing}</p>
              <p className="text-sm">Calories</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b-2 border-gray-200 pb-2">Ingredients</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-600">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-700 border-b-2 border-gray-200 pb-2">Instructions</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-600">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/recipes?limit=12');
        setRecipes(response.data.recipes);
      } catch (error) {
        console.error("Error fetching recipes:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchRecipes();
  }, []);

  const handleSelectRecipe = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-semibold text-gray-700 bg-gray-50">
        Loading delicious recipes...
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <style>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.5s ease-out forwards;
        }
      `}</style>
      <div className="container mx-auto p-4 sm:p-6 lg:p-8">
        <header className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800">React Recipe Book</h1>
          <p className="text-gray-500 mt-2">Find and cook delicious recipes</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} onClick={handleSelectRecipe} />
          ))}
        </div>
      </div>
      
      {selectedRecipe && <RecipeDetail recipe={selectedRecipe} onBack={handleBack} />}
    </div>
  );
}

  