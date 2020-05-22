import React from 'react';
import Card from '../Card/Card';
import chuck from '../../img/Chuck_Norris.png';
import PropTypes from "prop-types";


const FavoriteList = ({ favoriteList }) => {
    if (favoriteList.length !== 0) {
        return favoriteList.map(item => (
            <Card item={item} key={item.id} favoriteList={favoriteList} moderator="--fav" />
        ));
    }
    return (
        <div className="favorite__null ">
            You haven't add any favorite jokes yet?!!!
            <div className="favorite__sadChuck">
                <img src={chuck} className="favorite__img" alt="sad Chuck" />
            </div>
        </div>
    );
};
export default FavoriteList;

FavoriteList.propTypes = {
    favoriteList: PropTypes.arrayOf(PropTypes.object).isRequired
};