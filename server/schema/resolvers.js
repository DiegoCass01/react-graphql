import { UserList } from "../FakeData";

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

export { resolvers };
