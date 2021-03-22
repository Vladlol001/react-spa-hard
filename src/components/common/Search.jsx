import { useState } from 'react';

function Search({ cb }) {
    const [value, setValue] = useState('');

    const handleKey = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="search">
            <div className="search__container">
                <input
                    type="search"
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    placeholder="Search smt"
                />
                <button className="search__btn" onClick={handleSubmit}>
                    Find
                </button>
            </div>
        </div>
    );
}

export default Search;
