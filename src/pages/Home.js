import { useState } from "react";

import SearchBar from "../components/SearchBar";
import RecipeCard from "../components/RecipeCard";

import recipes from "../data/recipes";

function Home() {
  const [search, setSearch] = useState("");

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <section className="hero">
        <div className="overlay">
          <h1>Discover Amazing Recipes 🍕</h1>

          <p>Cook delicious meals easily at home.</p>

          <SearchBar search={search} setSearch={setSearch} />
        </div>
      </section>

      <section className="recipes-section">
        <h2>Featured Recipes</h2>

        <div className="recipes-grid">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Home;