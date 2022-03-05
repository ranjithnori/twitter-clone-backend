"use strict";
var userController = require("./controller");

const userRoutes = function (app) {
  app
    .route("/users")
    .get(userController.fetch_all_users)
    .post(userController.create_user);

  app
    .route("/users/:userId")
    .get(userController.fetch_user)
    .patch(userController.update_user)
    .delete(userController.delete_user);
};

module.exports = userRoutes;
