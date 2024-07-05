const jsonwebtoken = require("jsonwebtoken");


function checkAuth(req,res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jsonwebtoken.verify(token, "secret code");
    req.userData = decodedToken;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "invalid token",
      error: err,
    });
  }
}

module.exports = { checkAuth: checkAuth };
