import { UserList } from "../FakeData.js";

const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};

export { resolvers };
