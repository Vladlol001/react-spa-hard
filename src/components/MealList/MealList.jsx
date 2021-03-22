import MealItem from './MealItem/MealItem';

function MealList({ meals }) {
    return (
        <div className="main__container">
            {meals.map((item) => (
                <MealItem key={item.idMeal} {...item} />
            ))}
        </div>
    );
}

export default MealList;
