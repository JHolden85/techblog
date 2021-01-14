const { Comment } = require('../models');

const commentdata = [
  {
    title: "First comment on the first post!",
    date: "1/1/21",
    content: "Welcome! Thanks!!",
    post_id: "1",
    user_id: "2"
  },
  {
    title: "Indeed, hello world.",
    date: "1/2/21",
    content: "This site is great!",
    post_id: "1",
    user_id: "3"
  },
  {
    title: "Surprisingly challenging.",
    date: "1/3/21",
    content: "I think this will take more than being swift, we will also need to be mysterious, like the darkside of the moon.",
    post_id: "2",
    user_id: "1"
  },
  {
    title: "Sad.",
    date: "1/4/21",
    content: "Wait, is this the plot to Lion King?",
    post_id: "3",
    user_id: "1"
  },
  
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;