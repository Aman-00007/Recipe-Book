import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";

function Popular() {
  const popularRecipes = recipes.slice(0, 2);

  return (
    <section className="recipes-section">
      <h2>🔥 Popular Recipes</h2>

      <div className="recipes-grid">
        {popularRecipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

export default Popular;