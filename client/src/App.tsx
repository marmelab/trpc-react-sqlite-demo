import AddCircleIcon from "@mui/icons-material/AddCircle";
import { Button, Chip, IconButton, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { MovieCard } from "./Movie/MovieCard";
import { MovieDetail } from "./Movie/MovieDetail";
import { trpc } from "./trpc";

const App = () => {
  const [selectedDirector, setSelectedDirector] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);

  const {
    data: directors,
    isLoading: isLoadingDirectors,
    refetch: refetchDirectors,
  } = trpc.director.getDirectors.useQuery();

  const {
    data: movies,
    isLoading: isLoadingMovies,
    refetch: refetchMovies,
  } = trpc.movie.getMovies.useQuery();

  const createDirector = trpc.director.createDirector.useMutation({
    onSuccess: () => {
      refetchDirectors();
    },
  });

  const deleteDirector = trpc.director.deleteDirector.useMutation({
    onSuccess: () => {
      refetchDirectors();
    },
  });

  const handleAddDirector = () => {
    const name = prompt("Director's name:");
    if (name) {
      createDirector.mutate({ name });
    }
  };

  const handleDeleteDirector = (id: string) => {
    deleteDirector.mutate(id);
  };

  const deleteMovie = trpc.movie.deleteMovie.useMutation({
    onSuccess: () => {
      refetchMovies();
    },
  });

  const handleDeleteMovie = (id: string) => {
    deleteMovie.mutate(id);
  };

  if (isLoadingDirectors || isLoadingMovies) return <div>Loading ...</div>;

  return (
    <Stack p={2} gap={2} alignItems="center">
      {!selectedDirector && !selectedMovie && (
        <>
          <Typography variant="h3" textAlign="center">
            Movies
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            spacing={2}
            justifyContent="center"
          >
            {(movies ?? []).map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                onClick={() => setSelectedMovie(movie.id)}
                handleDelete={() => handleDeleteMovie(movie.id)}
              />
            ))}
          </Stack>
          <Typography variant="h3" textAlign="center">
            Directors
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            spacing={2}
            justifyContent="center"
            alignItems="center"
          >
            {(directors ?? []).map((director) => (
              <Chip
                key={director.id}
                label={director.name}
                onClick={() => {
                  setSelectedDirector(director.id);
                  setSelectedMovie(null);
                }}
                onDelete={() => handleDeleteDirector(director.id)}
              />
            ))}
            <IconButton onClick={handleAddDirector}>
              <AddCircleIcon />
            </IconButton>
          </Stack>
        </>
      )}
      {selectedMovie !== null && (
        <>
          <MovieDetail
            movie={(movies ?? []).find((movie) => movie.id === selectedMovie)!}
          />
          <Button
            onClick={() => {
              setSelectedMovie(null);
            }}
          >
            Go Back
          </Button>
        </>
      )}
      {selectedDirector !== null && selectedMovie === null && (
        <>
          <Typography variant="h3" textAlign="center">
            Director's Movies
          </Typography>
          <Stack
            direction="row"
            flexWrap="wrap"
            useFlexGap
            spacing={2}
            justifyContent="center"
          >
            {(movies ?? [])
              .filter((movie) => movie.directorId === selectedDirector)
              .map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                  onClick={() => setSelectedMovie(movie.id)}
                  handleDelete={() => handleDeleteMovie(movie.id)}
                />
              ))}
          </Stack>
          <Button
            onClick={() => {
              setSelectedDirector(null);
            }}
          >
            Go Back
          </Button>
        </>
      )}
    </Stack>
  );
};

export default App;
