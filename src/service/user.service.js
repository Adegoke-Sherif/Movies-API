import User from "../database/user.schema.js";
import { ErrorWithStatus } from "../exceptions/error=with-status-exception.js";

export const create = (dto) => {
  return User.create(dto);
};

export const getAllUsers = async () => {
  try {
    return User.find();
  } catch(error) {
    throw new ErrorWithStatus(error.message, 500)
  }
}

export const findById = (id) => {
  return User.findById(id);
};
