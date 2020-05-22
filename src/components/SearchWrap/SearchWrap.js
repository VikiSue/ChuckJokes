import React from 'react';
import SearchForm from '../Form/SearchForm';
import { connect } from 'react-redux';
import { onSearch } from '../../redux/actions/onSearch';
import { FavoriteOpenSvg } from '../../svg';
import { onFavoriteShow } from '../../redux/actions/showFavorite';
import PropTypes from 'prop-types';

const SearchWrap = ({ onSearch, onFavoriteShow, onFavShow, searchNull }) => {
    const onSubmit = values => {
        onSearch(values.searchType, values.category, values.textField);
    };

    return (
        <div className="main">
            <header className="main__header">
                <div>MSI 2020 </div>
                <div className={onFavShow ? 'hidden' : 'main__link '} onClick={onFavoriteShow}>
                    <FavoriteOpenSvg /> <span className="main__pale">Favorite </span>
                </div>
            </header>
            <h1>Hey!</h1>
            <h4>Let’s try to find a joke for you:</h4>
            <SearchForm onSubmit={onSubmit} />
            <p>{searchNull}</p>
        </div>
    );
};

const SearchWrapContainer = connect(
    state => ({ onFavShow: state.searchForm.onFavShow, searchNull: state.searchForm.searchNull }),
    { onSearch, onFavoriteShow }
)(SearchWrap);

export default SearchWrapContainer;

SearchWrapContainer.propTypes = {
    onSearch: PropTypes.func,
    onFavoriteShow: PropTypes.func,
    onFavShow: PropTypes.func,
    searchNull: PropTypes.string,
};
