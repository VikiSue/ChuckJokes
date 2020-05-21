import React from "react";
import { connect } from "react-redux";
import {
  addToFavorite,
  deleteFromFavorite
} from "../../redux/actions/actionWithFavorite";
import moment from "moment";
import { HeartSVG, LinkSVG, MessageSVG, RedHeartSVG } from "../../svg";

const Card = ({
  item,
  addToFavorite,
  deleteFromFavorite,
  jokes,
  favoriteList,
  moderator
}) => {

  return (
    <div className={`card card${moderator}`}>
      {favoriteList.find(id => id.id === item.id) ? (
        <button
          onClick={() => deleteFromFavorite(item.id)}
          className={`card__btn card__btn${moderator}`}
        >
          <RedHeartSVG />
        </button>
      ) : (
        <button
          onClick={() => addToFavorite(item.id, jokes)}
          className={`card__btn card__btn${moderator}`}
        >
          <HeartSVG />
        </button>
      )}
      <div className="card__content">
        <div className="card__svg">
          <div className={`card__svgWrap card__svgWrap${moderator}`}>
            <MessageSVG />
          </div>
        </div>
        <div className="card__text">
          <div className="card__id">
            <span className="card__textPale"> ID:</span>
            <a href="#" className="card__link">
              {item.id} <LinkSVG />
            </a>
          </div>
          <div className={`card__joke card__joke${moderator}`}>
            {item.value}
          </div>
          <div className="card__footer">
            <span className="card__textPale">
              {`Last update: ${moment(item.updated_at).fromNow()} ago`}
            </span>
            {item.categories.map((item, index) => (
              <div key={index} className={`card__category card__category${moderator}`}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const CardContainer = connect(
  state => ({ jokes: state.searchForm.jokes, favorite: state.favorite }),
  { addToFavorite, deleteFromFavorite }
)(Card);
export default CardContainer;
