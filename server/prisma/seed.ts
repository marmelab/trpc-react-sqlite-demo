import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.director.create({
    data: {
      name: "Frank Darabont",
      movies: {
        create: [
          {
            title: "The Shawshank Redemption",
            synopsis:
              "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
            imageLink:
              "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
            year: 1994,
            link: "https://www.themoviedb.org/movie/278-the-shawshank-redemption?language=en-EN",
            alreadyWatched: true,
          },
          {
            title: "The Green Mile",
            synopsis:
              "A supernatural tale set on death row in a Southern prison, where gentle giant John Coffey possesses the mysterious power to heal people's ailments. When the cell block's head guard, Paul Edgecomb, recognizes Coffey's miraculous gift, he tries desperately to help stave off the condemned man's execution.",
            imageLink:
              "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/8VG8fDNiy50H4FedGwdSVUPoaJe.jpg",
            year: 1999,
            link: "https://www.themoviedb.org/movie/497-the-green-mile?language=en-EN",
            alreadyWatched: true,
          },
        ],
      },
    },
  });
  await prisma.director.create({
    data: {
      name: "Francis Ford Coppola",
      movies: {
        create: [
          {
            title: "The Godfather",
            synopsis:
              "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
            imageLink:
              "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
            year: 1972,
            link: "https://www.themoviedb.org/movie/238-the-godfather?language=en-EN",
            alreadyWatched: false,
          },
        ],
      },
    },
  });
  await prisma.director.create({
    data: {
      name: "Christopher Nolan",
      movies: {
        create: [
          {
            title: "The Dark Knight",
            synopsis:
              "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
            imageLink:
              "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
            year: 2008,
            link: "https://www.themoviedb.org/movie/155-the-dark-knight?language=en-EN",
            alreadyWatched: true,
          },
        ],
      },
    },
  });
  await prisma.director.create({
    data: {
      name: "Steven Spielberg",
      movies: {
        create: [
          {
            title: "Schindler's List",
            synopsis:
              "The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.",
            imageLink:
              "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
            year: 1993,
            link: "https://www.themoviedb.org/movie/424-schindler-s-list?language=en-EN",
            alreadyWatched: false,
          },
        ],
      },
    },
  });
  await prisma.director.create({
    data: {
      name: "Reginald Rose",
      movies: {
        create: [
          {
            title: "12 Angry Men",
            synopsis:
              "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other.",
            imageLink:
              "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/ow3wq89wM8qd5X7hWKxiRfsFf9C.jpg",
            year: 1957,
            link: "https://www.themoviedb.org/movie/389-12-angry-men?language=en-EN",
            alreadyWatched: false,
          },
        ],
      },
    },
  });
  await prisma.director.create({
    data: {
      name: "Robert Zemeckis",
      movies: {
        create: [
          {
            title: "Forrest Gump",
            synopsis:
              "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
            imageLink:
              "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
            year: 1994,
            link: "https://www.themoviedb.org/movie/13-forrest-gump?language=en-EN",
            alreadyWatched: true,
          },
        ],
      },
    },
  });
  await prisma.director.create({
    data: {
      name: "Roberto Benigni",
      movies: {
        create: [
          {
            title: "Life Is Beautiful",
            synopsis:
              "A touching story of an Italian book seller of Jewish ancestry who lives in his own little fairy tale. His creative and happy life would come to an abrupt halt when his entire family is deported to a concentration camp during World War II. While locked up he tries to convince his son that the whole thing is just a game.",
            imageLink:
              "https://media.themoviedb.org/t/p/w600_and_h900_bestv2/74hLDKjD5aGYOotO6esUVaeISa2.jpg",
            year: 1997,
            link: "https://www.themoviedb.org/movie/637-la-vita-e-bella?language=en-EN",
            alreadyWatched: false,
          },
        ],
      },
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
