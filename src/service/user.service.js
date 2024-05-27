import User from "../database/user.schema.js";
import { ErrorWithStatus } from "../exceptions/error=with-status-exception.js";

export const create = (dto) => {
  return User.create(dto);
};

export const getAllUsers = async (page = 1, limit = 10, query = null) => {
  try {
    const skip = (page -1 ) * limit;
    //page 1 == skip 0,
    const filter = query ? { name: { $regex: query, $options: "i"} }: {};
    const users = await User.find(filter,
      {

      }, { password: 0, _v: 0,}).skip(skip).limit(limit);
    const total = await User.countDocuments(filter);
    return { data: users, meta: { page, limit, total }}
  } catch(error) {
    throw new ErrorWithStatus(error.message, 500);
  }
}

export const findById = (id) => {
  return User.findById(id);
};
