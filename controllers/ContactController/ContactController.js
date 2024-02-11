const { Sequelize } = require("sequelize");
const db = require("../../models");

const CreateContact = async (req, res) => {
  try {
    console.log("req", req.user.id);
    const { name, phoneNumber } = req.body;
    const contact = await db.Contact.create({
      name,
      phoneNumber,
      userId: req.user.id,
    });
    res.status(201).json(contact);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

const getAllContacts = async (req, res) => {
  try {
    const contacts = await db.Contact.findAll({
      where: { userId: req.user.id },
    });
    res.json(contacts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  CreateContact,
  getAllContacts,
};
