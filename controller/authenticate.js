const jwt = require("jsonwebtoken");
const appConstants = require("../constants/app.constants");

module.exports = {
  authenticate: (req, res) => {
    if (req.body.username === "kamal") {
      if (req.body.password === 123) {
        const payload = {
          check: true,
        };
        var token = jwt.sign(
          payload,
          process.env.DB_URL_LOCAL || appConstants.secret,
          {
            expiresIn: 1440, // expires in 24 hours
          }
        );
        res.json({
          message: "authentication done ",
          token: token,
        });
      } else {
        res.json({ message: "please check your password !" });
      }
    } else {
      res.json({ message: "user not found !" });
    }
  },

  checkAuthentication: (req, res, next) => {
    var token = req.headers["access-token"];
    if (token) {
      jwt.verify(
        token,
        process.env.DB_URL_LOCAL || appConstants.secret,
        (err, decoded) => {
          if (err) {
            return res.json({ message: "invalid token" });
          } else {
            req.decoded = decoded;
            next();
          }
        }
      );
    } else {
      res.send({
        message: "No token provided.",
      });
    }
  },
};
