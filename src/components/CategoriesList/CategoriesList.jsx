import CategoriesItem from './CategoriesItem/CategoriesItem';

function CategoriesList({ catalog = [] }) {
    return (
        <div className="main__container">
            {catalog.map((item) => (
                <CategoriesItem key={item.idCategory} {...item} />
            ))}
        </div>
    );
}

export default CategoriesList;
