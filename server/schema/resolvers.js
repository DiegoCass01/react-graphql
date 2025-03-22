import { UserList, MovieList } from "../FakeData.js";
import { find, filter } from "lodash-es";

const resolvers = {
  Query: {
    //User resolvers
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = find(UserList, { id: Number(id) });
      return user;
    },
    //Movie resolvers
    movies: () => {
      return MovieList;
    },
    movie: (parent, args) => {
      const name = args.name;
      const movie = find(MovieList, { name });
      return movie;
    },
  },
  User: {
    favoriteMovies: () => {
      return filter(
        MovieList,
        (movie) =>
          movie.yearOfPublication >= 2000 && movie.yearOfPublication <= 2010
      );
    },
  },
};

export { resolvers };
