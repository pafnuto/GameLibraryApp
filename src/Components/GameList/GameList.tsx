import React, { useState } from "react";
import { Modal, Box } from "@mui/material";
import  GameCard  from '../GameCard/GameCard'
import { GameTypes } from "../../GameTypes";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

interface IGameListProps {
    games: GameTypes[];
    onClick: (id: string) => void;
  }

  
const GameList: React.FC<IGameListProps> = ({games, onClick}) => {
    const [isEditOpen, setEditOpen] = useState(false);
    const [isDeleteOpen, setDeleteOpen] = useState(false);
    const [game, setMovie] = useState({} as GameTypes);
  
    const onEdit = (id: string) => {
      const game = games.find((game) => game.metacriticID === id);
      if (game) {
        setEditOpen(true);
        setMovie(game);
      }
    };
  
    const onDelete = (id: string) => {
      const game = games.find((game) => game.metacriticID === id);
      if (game) setDeleteOpen(true);
    };
  
    const handleClose = (type: string) => {
      if (type === "edit") setEditOpen(false);
      else setDeleteOpen(false);
    };
    return (
        <>
          <div>
            {games.map((game) => (
              <GameCard
                onDelete={onDelete}
                onEdit={onEdit}
                onClick={onClick}
                key={game.metacriticID}
                game={game}
              />
            ))}
          </div>
          <Modal
            open={isEditOpen}
            onClose={() => handleClose("edit")}
            aria-labelledby="edit-movie-modal-title"
            aria-describedby="edit-movie-modal-description"
          >
            <Box className='gamebox'>
            <EditIcon/>
            </Box>
          </Modal>
          <Modal
            open={isDeleteOpen}
            onClose={() => handleClose("delete")}
            aria-labelledby="delete-movie-modal-title"
            aria-describedby="delete-movie-modal-description"
          >
            <Box>
              <DeleteIcon />
            </Box>
          </Modal>
        </>
      );
    };
export default GameList;