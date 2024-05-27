export const adminMiddleware = (req, res) => {
  console.log("Admin middleware")
  if(req?.user?.role !=="ADMIN") {
    return res.status(403).json({ message: "Forbidden"})
  }
  next();
}