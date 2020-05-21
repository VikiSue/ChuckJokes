import React from "react";
import { connect } from "react-redux";
import { onFavoriteHide } from "../../redux/actions/showFavorite";
import { FavoriteCloseSvg } from "../../svg";
import CSSTransitionGroup from 'react-transition-group/cjs/CSSTransition';
import FavoriteList from "./FavoriteList";

const FavoriteWithOverlay = ({ favoriteList, onFavShow, onFavoriteHide }) => {
  return (
      <CSSTransitionGroup in={ onFavShow} timeout={500} classNames="withOverlay--shown" unmountOnExit>
      <div   className={onFavShow ?  " withOverlay withOverlay--shown": "withOverlay"}>
        <div className="withOverlay__wrap ">
          <div className="withOverlay__link " onClick={onFavoriteHide}>
            <FavoriteCloseSvg /> <span className="withOverlay__pale">Favorite </span>
          </div>
            <FavoriteList favoriteList={favoriteList} />
        </div>
      </div>
      </CSSTransitionGroup>
  );
};
const FavoriteWithOverlayContainer = connect(
  state => ({ onFavShow: state.searchForm.onFavShow }),
  { onFavoriteHide }
)(FavoriteWithOverlay);
export default FavoriteWithOverlayContainer;
