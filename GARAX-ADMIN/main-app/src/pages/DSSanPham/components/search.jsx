import PropTypes from 'prop-types';
import SearchSolid from '../../../assets/Search-solid.svg?react'
const Search = ({placeholder = 'Search...', query, setQuery, wrapperClass}) => {
    return (
        <div className={`relative ${wrapperClass || ''}`}>
            <input className="field-input !pr-[60px] bg-white px-2 py-2 border-[1px] border-slate-400 rounded-md"
                   type="search"
                   placeholder={placeholder}
                   value={query}
                   onChange={e => setQuery(e.target.value)}/>
            <button className={`field-btn text-red !right-[40px] transition ${query ? 'opacity-100' : 'opacity-0'}`}
                    onClick={() => setQuery('')}
                    aria-label="Clear all">
                <SearchSolid />
            </button>
            <button className="field-btn icon" aria-label="Search">
                <i className="icon-magnifying-glass-solid"/>
            </button>
        </div>
    )
}

Search.propTypes = {
    placeholder: PropTypes.string,
    query: PropTypes.string,
    setQuery: PropTypes.func,
    wrapperClass: PropTypes.string
}

export default Search