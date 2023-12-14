import './index.css';
import SearchIcon from '../../Assets/Search/searchIcon.svg';

function SearchBar() {
    return (
        <div className='searchbar-container'>
            <img className="searchbar-icon" alt="SearchIcon" src={SearchIcon} />
            <input className="searchbar" placeholder="Search..." />
        </div>
    )
}

export default SearchBar;