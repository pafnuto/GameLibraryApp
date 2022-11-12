import React from 'react';
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
        <div className='gamecard' onClick={() => onClick(game.metacriticID)}>
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
            <Typography variant="body2">{game.released}</Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              {formatMovieLanguage(game.language)}
            </Typography>
            <Typography>{game.Rating}</Typography>
            <Typography>{game.runtime}</Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={() => onEdit(game.metacriticID)} size="small">
            <EditIcon />
          </Button>
          <Button size="small" onClick={() => onDelete(game.metacriticID)}>
            <DeleteIcon />
          </Button>
        </CardActions>
      </Card>
    );
  };

export default GameCard;