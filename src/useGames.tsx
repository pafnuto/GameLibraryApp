import React, { useState, useEffect } from "react";
import { GameTypes as Games } from "./GameTypes";
import { gameData } from "./GameData";

export const useGames= () => {
  const [game, setMovies] = useState<Games[]>([]);
  useEffect(() => {
    setMovies(gameData);
  }, []);
  return gameData;
};

