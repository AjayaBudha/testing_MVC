const { Router } = require("express");
const goatsController = require("../controller/goats");

const router = Router();

router.route("/").get(goatsController.index).post(goatsController.create);

router.route("/:id").get(goatsController.show);

module.exports = router;
