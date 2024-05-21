const express = require("express");
const router = express.Router();

const user_controller = require("../controllers/userController");

/* GET users listing. */
router.get("/", user_controller.index);

router.get("/user.create", user_controller.user_create_get);

router.post("/user/create", user_controller.user_create_post);

router.get("/user/:id/delete", user_controller.user_delete_get);

router.post("/user/:id/delete", user_controller.user_delete_post);

router.get("/user/:id/update", user_controller.user_update_get);

router.post("/user/:id/update", user_controller.user_update_post);

router.get("/user/:id", user_controller.user_detail);

router.get("/user", user_controller.user_list);

module.exports = router;
