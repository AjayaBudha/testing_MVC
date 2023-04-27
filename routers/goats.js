const { Router } = require("express");
const goatController = require("../controller/goats");
const router = Router();

router.route("/").get(goatController.index);

module.exports = router;
