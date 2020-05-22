import React from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../scss/App.scss';
import SearchWrap from '../SearchWrap/SearchWrap';
import { connect } from 'react-redux';
import { useApp } from './useApp';
import Favorite from '../Favorite/Favorite';
import JokesList from '../JokesList/JokesList';
import FavoriteWithOverlay from '../Favorite/FavoriteWithOverlay';

const App = ({ favorite, jokes }) => {
    const { favoriteList } = useApp(favorite);

    return (
        <div className="App">
            <div className="App__content">
                <div className="centerPanel">
                    <SearchWrap favoriteList={favoriteList} />
                    {jokes.length !== 0 && <JokesList favoriteList={favoriteList} />}
                </div>
                <div className="sidePanel">
                    <Favorite favoriteList={favoriteList} />
                </div>
            </div>
            <FavoriteWithOverlay favoriteList={favoriteList} />
        </div>
    );
};

const AppContainer = connect(state => ({
    favorite: state.favorite,
    jokes: state.searchForm.jokes,
}))(App);

export default AppContainer;

AppContainer.propTypes = {
    favorite: PropTypes.arrayOf(PropTypes.object),
    jokes: PropTypes.arrayOf(PropTypes.object),
};
