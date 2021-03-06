import { useState } from 'react';

const Form = ({ searchMovies }) => {
    const [searchValue, setSearchValue] = useState("");

    const handleChange = (event) => {
        setSearchValue(event.target.value);
        // console.log(searchValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();//阻止默认项
        searchMovies(searchValue);
        //clear the form
        setSearchValue("");
    }
    return (
        <form onSubmit={handleSubmit} id="search" className="search">
            <input
                onChange={handleChange}
                type="search"
                placeholder="Search for a title..."
                value={searchValue}
            />
        </form>
    );
};

export default Form;