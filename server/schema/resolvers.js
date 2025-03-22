import { UserList } from "../FakeData.js";
import { has } from "lodash-es";

const resolvers = {
  Query: {
    users: () => {
      return UserList;
    },
    user: (parent, args) => {
      const id = args.id;
      const user = has.find();

      return;
    },
  },
};

export { resolvers };
