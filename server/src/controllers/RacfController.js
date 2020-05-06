const {getUserInfo,sendCommand} = require('./services/zowe');

const listUser = async (req, res) => {
  const { user } = req.query;
  const userData = await getUserInfo(user);
  return res.json({ userData });
};

const connectUser = async(req,res)=>{
  const { user,group } = req.body;
  const command = `CO ${user} GROUP(${group})`
  await sendCommand(command)
  const userData = await getUserInfo(user);
  return res.json({ userData });
}
const removeConnection = async(req,res)=>{
  const { user,group } = req.body;
  const command = `RE ${user} GROUP(${group})`
  await sendCommand(command)
  const userData = await getUserInfo(user);
  return res.json({ userData });
}

module.exports = {
  listUser,
  connectUser,
  removeConnection
};
