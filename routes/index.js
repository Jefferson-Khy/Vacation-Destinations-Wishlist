const router = require("express").Router();

const destinationRoutes = require("./api/destination");
const pageRoutes = require("./pages/home");
router.use("/api", destinationRoutes);
router.use("/", pageRoutes);

module.exports = router;
