function defineModel(app, name, attributes) {
  let attrs = {};
  for (let key in attributes) {
    let value = attributes[key];
    if (typeof value === "object" && value["type"]) {
      value.allowNull = value.allowNull && true;
      attrs[key] = value;
    } else {
      attrs[key] = {
        type: value,
        allowNull: true
      };
    }
  }

  return app.model.define(name, attrs, {
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    version: true,
    freezeTableName: true
  });
}

module.exports = { defineModel };