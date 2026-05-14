import RecipeCard from "../components/RecipeCard";
import recipes from "../data/recipes";

function Recipes() {
  return (
    <section className="recipes-section">
      <h2>All Recipes</h2>

      <div className="recipes-grid">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}

export default Recipes;