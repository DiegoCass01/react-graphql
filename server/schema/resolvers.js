import { UserList } from "../FakeData.js";
import { find } from "lodash-es";

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = find(UserList, { id: Number(id) });
      return user;
    },
  },
};

export { resolvers };
