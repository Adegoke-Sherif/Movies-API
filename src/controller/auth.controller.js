import * as authService from "../service/auth.service.js"

export const login = async (req, res) => {
  try{
  const { email, password } = req.body;
  const token = await authService.login(email, password)
  res.json({
    message: "Login successfully",
    data: {
      accessToken: token,
    },
  });
  } catch(err) {
    res.status(err.status || 500);
    res.json({ message: err.message})
  }
}


export const register = async (req, res) => {
  try{
  const { name, email, password, role } = req.body;
  const newUser = await authService.register(name, email, password, role)
  res.json({
    message: "User created successfully",
    data: newUser
  });
  } catch(err) {
    res.status(err.status || 500);
    res.json({ message: err.message})
  }
}