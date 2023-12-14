import './index.css';
import SearchIcon from '../../Assets/Search/searchIcon.svg';

function SearchBar({searchValue, handleSearch}) {
    return (
        <div className='searchbar-container'>
            <img className="searchbar-icon" alt="SearchIcon" src={SearchIcon} />
            <input className="searchbar" placeholder="Search..." value={searchValue} onChange={handleSearch} />
        </div>
    )
}

export default SearchBar;