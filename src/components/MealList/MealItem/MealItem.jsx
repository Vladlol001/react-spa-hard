import { Link } from 'react-router-dom';

function MealItem({ strMeal, idMeal, strMealThumb }) {
    return (
        <div className="card">
            <div className="card__photo">
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className="cards__description">
                <div className="card__name">{strMeal}</div>
            </div>
            <div className="card__price">
                <Link to={`/meal/${idMeal}`} className="card__btn">
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export default MealItem;
