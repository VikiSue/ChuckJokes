import React from 'react';
import Card from '../Card/Card';

const FavoriteList = ({ favoriteList }) => {
    return (
        <>
            {favoriteList.length > 0 ? (
                favoriteList.map(item => (
                    <Card item={item} key={item.id} favoriteList={favoriteList} moderator="--fav" />
                ))
            ) : (
                <div className="main__pale ml-4">You haven't add any favorite jokes yet...</div>
            )}
        </>
    );
};
export default FavoriteList;
