const express = require("express");
const {
  sendMessage,
  allMesssage,
} = require("../controllers/messageControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.post("/", protect, sendMessage);
router.get("/:chatId", protect, allMesssage);

module.exports = router;
