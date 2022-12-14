import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { GameTypes } from "../../GameTypes";

interface IGameProps {
    game: GameTypes;
    onEdit: (id: string) => void;
    onDelete: (id: string) => void;
    onClick: (id: string) => void;
  }

const GameCard: React.FC<IGameProps> = ({
    game,
    onEdit,
    onDelete,
    onClick,
  }) => {
    const formatGameLanguage = (language: string) =>
      language.slice(0, 3).toLocaleUpperCase();
  
    return (
        <Card className='gamecard' onClick={() => onClick(game.igdbID)}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="280"
          image={game.poster}
        />
        <CardContent>
          <Typography sx={{ color: "#f65261" }} gutterBottom variant="h5">
            {game.title}
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="body2">{game.year}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {formatGameLanguage(game.language)}
            </Typography>
            <Typography>{game.igdbRating}</Typography>
            <Typography>{game.year}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={() => onEdit(game.igdbID)} size="small">
            <EditIcon />
          </Button>
          <Button size="small" onClick={() => onDelete(game.igdbID)}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    );
  };

export default GameCard;