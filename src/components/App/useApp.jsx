import React, { useEffect, useState } from "react";

export const useApp = (favorite) => {
  const [favoriteList, setFavorite] = useState([]);
  const handleStorage = async () => {
    const fav = await JSON.parse(localStorage.getItem("favorite"));
    setFavorite(fav.favorite);
  };
  useEffect(() => {
    handleStorage();
  }, [favorite]);

  return { favoriteList };
};
