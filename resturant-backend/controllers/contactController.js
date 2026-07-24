const Contact = require("../models/contact");

// Create Contact
const createContact = async (req, res) => {

    try {

        const { name, email, message } = req.body;

        const contact = await Contact.create({
            name,
            email,
            message
        });

        res.status(201).json({
            success: true,
            message: "Message Sent Successfully",
            data: contact
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

// Get All Contacts
const getContacts = async (req, res) => {

    try {

        const contacts = await Contact.find().sort({ createdAt: -1 });

        res.status(200).json({
            success: true,
            data: contacts
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }

};

module.exports = {
    createContact,
    getContacts
};