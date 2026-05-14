import { useState } from "react";
import "./RecipeCard.css";

function RecipeCard({ recipe }) {
  const [show, setShow] = useState(false);

  return (
    <div className="card">
      <img src={recipe.image} alt={recipe.title} />

      <div className="card-content">
        <h3>{recipe.title}</h3>

        <p>{recipe.description}</p>

        {show && (
          <div className="details">
            <h4>Ingredients:</h4>

            <ul>
              {recipe.ingredients.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>

            <h4>Steps:</h4>

            <ol>
              {recipe.steps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </div>
        )}

        <button onClick={() => setShow(!show)}>
          {show ? "Hide Recipe" : "View Recipe"}
        </button>
      </div>
    </div>
  );
}

export default RecipeCard;