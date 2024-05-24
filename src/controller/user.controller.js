
import * as userService from "../service/user.service.js";

export const create = async (req, res) => {
  const dto = req.body;
  try {
    const user = await userService.create(dto);
    res.json({ message: "User Created", user });
  } catch (error) {
    res.status(500).json({ message: "Error creating user", error: error.message });
  }
};

export const findById = async (req, res) => {
  const { userId } = req.params;
  try {
    const user = await userService.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.json({ message: "Success", user });
  } catch (error) {
    res.status(500).json({ message: "Error retrieving user", error: error.message });
  }
};

