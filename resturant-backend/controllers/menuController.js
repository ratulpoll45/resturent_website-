const Menu = require("../models/menu");
let menu = [
  {
    id: 1,
    name: "Chicken Biryani",
    price: 250
  },
  {
    id: 2,
    name: "Mutton Biryani",
    price: 350
  },
  {
    id: 3,
    name: "Cold Drink",
    price: 50
  }
];

const getMenu = async (req, res) => {
  try {
    const menu = await Menu.find();

    res.json(menu);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const addMenu = async (req, res) => {
  try {
    const newItem = await Menu.create(req.body);

    res.status(201).json({
      message: "Menu item added successfully",
      data: newItem
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const updateMenu = async (req, res) => {
  try {
    const updatedMenu = await Menu.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedMenu) {
      return res.status(404).json({
        message: "Menu item not found"
      });
    }

    res.json({
      message: "Menu updated successfully",
      data: updatedMenu
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
const deleteMenu = async (req, res) => {
  try {
    const menu = await Menu.findByIdAndDelete(req.params.id);

    if (!menu) {
      return res.status(404).json({
        message: "Menu item not found"
      });
    }

    res.status(200).json({
      message: "Menu deleted successfully"
    });

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};
module.exports = {
  getMenu,
  addMenu,
  updateMenu,
  deleteMenu
};