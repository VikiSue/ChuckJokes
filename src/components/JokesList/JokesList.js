import React from "react";
import { connect } from "react-redux";
import Card from "../Card/Card";

const JokesList = ({ jokes, isLoading, favoriteList }) => {
  return (
    <div className='jokesList'>
      {jokes.map(item => (
        <Card item={item} key={item.id} favoriteList={favoriteList} />
      ))}
    </div>
  );
};

const JokesListContainer = connect(state => ({
  jokes: state.searchForm.jokes,
  isLoading: state.searchForm.jokes.isLoading
}))(JokesList);
export default JokesListContainer;
/* heart */


