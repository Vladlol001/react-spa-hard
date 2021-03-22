import { Link } from 'react-router-dom';

function CategoriesItem({
    idCategory,
    strCategory,
    strCategoryDescription,
    strCategoryThumb,
}) {
    return (
        <div className="card">
            <div className="card__photo">
                <img src={strCategoryThumb} alt={strCategory} />
            </div>
            <div className="cards__description">
                <div className="card__name">{strCategory}</div>
                <div className="card__description">
                    {strCategoryDescription.slice(0, 60)}...
                </div>
            </div>
            <div className="card__price">
                <Link to={`/category/${strCategory}`} className="card__btn">
                    Watch category
                </Link>
            </div>
        </div>
    );
}

export default CategoriesItem;
