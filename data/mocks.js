

      return { firstName: args.firstName, lastName: args.lastName };
    author: (root, args) => {
    },
  Author: () => ({ firstName: () => casual.first_name, lastName: () => casual.last_name }),
  Post: () => ({ title: casual.title, text: casual.sentences(3) }),
  Query: () => ({
  String: () => 'It works!',
  }),
const mocks = {
export default mocks;
import casual from 'casual';
};