const db = require("../db");

module.exports = app => {
  const { STRING, INTEGER, DATE, BOOLEAN } = app.Sequelize;

  const Post = db.defineModel(app, "posts2", {
    id: {
      type: INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: STRING,
    describe: STRING,
  });

  return Post;
};