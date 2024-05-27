
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

export const getAllUsers = async (req, res) => {
  try {
    console.log("user", req.user);

    //adding pagination
    let page = Number(req.query.page) || 1
    page = page < 1 ? 1 : page;
    let limit = Number(req.query.limit) || 10
    limit = limit < 1 ? 10 : limit;
    const query = req.query.q;
    const { data, meta } = await userService.getAllUsers(page, limit, query);
    res.json({ message: "Get all users", data, meta})
  }catch(error) {
    res.status(500).json({ message: error.message })
  }
}

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

