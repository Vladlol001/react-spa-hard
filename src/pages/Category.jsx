import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import Preloader from '../components/common/Preloader';
import MealList from '../components/MealList/MealList';

function Category() {
    const [meals, setMeals] = useState([]);
    const { name } = useParams();
    useEffect(() => {
        getFilteredCategory(name).then((data) => setMeals(data.meals));
    }, []);
    return <>{!meals.length ? <Preloader /> : <MealList meals={meals} />}</>;
}

export default Category;
