const { Post } = require('../models');

const postdata = [
  {
    title: "Hello World!",
    date: "1/1/21",
    content: "Just posting to be the first one to post on this Tech Blog! Nice job!.",
    user_id: "1",
  },
  {
    title: "Lets get down to business.",
    date: "1/3/21",
    content: "We need to defeat the Hun. This will require we become swift as a coursing river",
    user_id: "2",
  },
  {
    title: "A story of my father's passing.",
    date: "1/4/21",
    content: "I was hanging out in a gorge, when a ton of antelope started to stampede. My father saved me, but he could save himself.",
    user_id: "3",
  },

];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;