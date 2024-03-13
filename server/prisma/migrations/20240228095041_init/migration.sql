/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `Director` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[title]` on the table `Movie` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Director_name_key" ON "Director"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Movie_title_key" ON "Movie"("title");
