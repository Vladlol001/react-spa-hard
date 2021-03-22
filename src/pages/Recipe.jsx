import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMealById } from '../api';
import Preloader from '../components/common/Preloader';

function Recipe() {
    const [recipe, setRecipe] = useState({});
    const { id } = useParams();

    useEffect(() => getMealById(id).then((data) => setRecipe(data.meals[0])), [
        id,
    ]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className="recipe">
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <div className="recipe__name">{recipe.strMeal}</div>
                    <div className="recipe__container">
                        <div>
                            <span>Category: </span>
                            <p>{recipe.strCategory}</p>
                        </div>
                        {recipe.strArea ? (
                            <div>
                                <span>Area: </span>
                                <p>{recipe.strArea}</p>
                            </div>
                        ) : null}
                    </div>
                    <div className="recipe__description">
                        <p>{recipe.strInstructions}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Recipe;
