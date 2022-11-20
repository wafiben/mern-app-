const User = require("../modelsOfProject/User");

const getUsers = async (requset, response) => {
  try {
    const users = await User.find();
    response.status(200).json({ users: users });
  } catch (error) {
    response.status(500).json({ msg: "error on getting users" });
  }
};
const getOneUser = async (req, res) => {
  const id = req.params.id;
  try {
    const foundUser = await User.findOne({ _id: id });
    if (foundUser) {
      res.status(200).json({ user: foundUser });
    } else {
      res.status(400).json({ msg: "no user found" });
    }
  } catch {
    response.status(500).json({ msg: "error on get  one user users" });
  }
};
const postUser = async (request, response) => {
  const user = request.body;
  try {
    const foundUser =await User.findOne({ email: user.email });
    if (foundUser) {
      response.status(400).json({ msg: "user already exist" });
    } else {
      let newUser = new User({
        userName: user.userName,
        email: user.email,
        age: user.age,
      });
      await newUser.save();
      response.status(200).json({ user: newUser, msg: "added sucess" });
    }
  } catch (error) {
    response.status(500).json({ msg: "error on adding user" });
  }
};
const putUser = async (req, res) => {
const id=req.params.id;
const user=req.body
try {
  await User.findByIdAndUpdate(id,user)
  res.status(200).json({  msg: "update sucess" });
} catch (error) {
  res.status(500).json({ msg: "error on update user" });
}
};
const deleteUser = async (req, res) => {
const id = req.params.id;
try {
   await User.findByIdAndDelete(id)
   res.status(200).json({  msg: "delete done" });
} catch (error) {
  res.status(500).json({ msg: "error on deleting user" });
}
};
module.exports = { getUsers, postUser, putUser, deleteUser, getOneUser };
