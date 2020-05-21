import React from "react";
import SearchForm from "../Form/SearchForm";
import { connect } from "react-redux";
import { onSearch } from "../../redux/actions/onSearch";
import { FavoriteOpenSvg } from "../../svg";
import {onFavoriteShow} from '../../redux/actions/showFavorite';

const SearchWrap = ({ onSearch, onFavoriteShow, onFavShow }) => {
  const onSubmit = values => {
    onSearch(values.searchType, values.category, values.textField);
  };

  return (
    <div className="main">
      <header className="main__header">
        <div>MSI 2020 </div>
        <div className={onFavShow ? 'hidden': "main__link "} onClick={onFavoriteShow}>
            <FavoriteOpenSvg /> <span className="main__pale" >Favorite </span>
        </div>
      </header>
      <h1>Hey!</h1>
      <h4>Let’s try to find a joke for you:</h4>
      <SearchForm onSubmit={onSubmit} />
    </div>
  );
};

const SearchWrapContainer = connect( state => ({onFavShow: state.searchForm.onFavShow}),
  { onSearch, onFavoriteShow}
)(SearchWrap);
export default SearchWrapContainer;
