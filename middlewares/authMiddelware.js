const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const token = req.headers["authorization"].split(" ")[1];
    console.log(token)
    console.log( process.env.JWT_SECRET)
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        console.log(err)
        return res.status(401).send({
          success: false,
          message: "Authr Failed",
        });
      } else {
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log(error);
    return res.status(401).send({
      success: false,
      error,
      message: "Auth Failedd",
    });
  }
};
