import { Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Movie } from "../../../server/src/movie/types";
import { AlreadyWatchToggle } from "./AlreadyWatchedToggle";

export const MovieCard = ({
  movie,
  onClick,
  handleDelete,
}: {
  movie: Movie;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <Card
      sx={{
        maxWidth: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea onClick={onClick}>
        <CardMedia
          component="img"
          height="380"
          image={movie.imageLink}
          alt={movie.title}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="center"
          >
            {movie.title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ justifyContent: "space-between" }}>
        <AlreadyWatchToggle movie={movie} />
        <Button size="small" onClick={handleDelete}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
