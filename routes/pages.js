const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
router.use(express.json())

router.get(["/", "/login"], (req, res) => {
  // res.send("<h2>hello guys</h2>");
  res.render("login");
  console.log(req.body)
});

router.get("/register", (req, res) => {
  res.render("register");
  console.log(res.body)

});
router.get("/profile", userController.isLoggedIn, (req, res) => {
  if (req.user) {
    res.render("profile", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("/home", userController.isLoggedIn, (req, res) => {
  //console.log(req.name);
  if (req.user) {
    res.render("home", { user: req.user });
  } else {
    res.redirect("/login");
  }
});
router.get("changepassword", userController.isLoggedIn,  (req, res) => {
  if (req.user) {
    res.render("changepassword", { user: req.user });
    console.log("body",req.body)
  } else {
    res.redirect("/login");
  }
});
module.exports = router;
