import { Link, Stack, Typography } from "@mui/material";
import { Movie } from "../../../server/src/movie/types";
import { trpc } from "../trpc";
import { AlreadyWatchToggle } from "./AlreadyWatchedToggle";

export const MovieDetail = ({ movie }: { movie: Movie }) => {
  const { data: director } = trpc.director.getDirectorById.useQuery(
    movie.directorId
  );

  return (
    <Stack spacing={2} alignItems="center">
      <Typography variant="h3" textAlign="center">
        {movie.title}
      </Typography>
      <Typography variant="h6" textAlign="center">
        {movie.year}
      </Typography>
      <img
        src={movie.imageLink}
        alt={movie.title}
        style={{ maxWidth: "400px" }}
      />
      <Typography variant="body1">{movie.synopsis}</Typography>
      <Typography variant="h6" textAlign="center">
        Director: {director?.name}
      </Typography>
      <Link href={movie.link} target="_blank" rel="noreferrer">
        TMDB Link
      </Link>
      <AlreadyWatchToggle movie={movie} />
    </Stack>
  );
};
