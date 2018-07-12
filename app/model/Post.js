const db = require("../db");

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const Post = db.defineModel(app, "posts", {
    title: STRING,
    describe: STRING,
  });

  return Post;
};