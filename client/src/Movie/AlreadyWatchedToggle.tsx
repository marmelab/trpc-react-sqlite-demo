import { FormControlLabel, Switch } from "@mui/material";
import { Movie } from "../../../server/src/movie/types";
import { trpc } from "../trpc";

export const AlreadyWatchToggle = ({ movie }: { movie: Movie }) => {
  const utils = trpc.useUtils();
  const updateMovie = trpc.movie.updateMovie.useMutation({
    onSuccess() {
      utils.movie.getMovies.invalidate();
    },
  });
  const handleChange = () => {
    updateMovie.mutate({
      ...movie,
      alreadyWatched: !movie.alreadyWatched,
    });
  };
  return (
    <FormControlLabel
      control={
        <Switch checked={movie.alreadyWatched} onChange={handleChange} />
      }
      label={movie.alreadyWatched ? "Already watched" : "Not watched yet"}
    />
  );
};
