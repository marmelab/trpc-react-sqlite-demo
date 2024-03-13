-- CreateTable
CREATE TABLE "Director" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Movie" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "directorId" TEXT,
    "year" INTEGER NOT NULL,
    "synopsis" TEXT NOT NULL,
    "imageLink" TEXT NOT NULL,
    "link" TEXT NOT NULL,
    "alreadyWatched" BOOLEAN NOT NULL,
    CONSTRAINT "Movie_directorId_fkey" FOREIGN KEY ("directorId") REFERENCES "Director" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
