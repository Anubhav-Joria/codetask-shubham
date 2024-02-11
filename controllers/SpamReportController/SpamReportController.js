const { Sequelize } = require("sequelize");
const db = require("../../models");

const reportSpam = async (req, res) => {
  try {
    const { phoneNumber } = req.body;
    const spamReport = await db.SpamReport.create({
      phoneNumber,
      userId: req.user.id,
    });
    res.status(201).json(spamReport);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  reportSpam,
};
