const api = require("./services/api");

const login = async (req, res) => {
  api.defaults.auth = req.body;
  try {
    const response = await api.post("/zosmf/services/authenticate");
    return res.json({ auth: !!response.headers["set-cookie"] });
  } catch (error) {
    res.json({ auth: false });
  }
};

module.exports = {
  login,
};
