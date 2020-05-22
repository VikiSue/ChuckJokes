import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../Card/Card';

const JokesList = ({ jokes, favoriteList }) => {
    return (
        <div className="jokesList">
            {jokes.map(item => (
                <Card item={item} key={item.id} favoriteList={favoriteList} />
            ))}
        </div>
    );
};

const JokesListContainer = connect(state => ({
    jokes: state.searchForm.jokes,
}))(JokesList);

export default JokesListContainer;

JokesListContainer.propTypes = {
    jokes: PropTypes.arrayOf(PropTypes.object),
    favoriteList: PropTypes.arrayOf(PropTypes.object),
};
