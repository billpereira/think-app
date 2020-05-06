const zowe = require("@zowe/cli");

const profile = {
  user: process.env.ZOSMF_USER,
  password: process.env.ZOSMF_PWD,
  host: process.env.ZOSMF_IP,
  port: process.env.ZOSMF_PORT,
  rejectUnauthorized: false,
};

const sendCommand = async (command) =>{
  const session = await zowe.ZosmfSession.createBasicZosmfSession(profile);
  const { commandResponse } = await zowe.IssueTso.issueTsoCommand(
    session,
    "FB3",
    command
  );
  return commandResponse
}

const getUserInfo = async (user) => {
  const command = `LU ${user}`;
  const commandResponse = await sendCommand(command)
  const connections = commandResponse
    .split("GROUP")
    .splice(2)
    .map((group) => {
      const connection = {
        group: group.substr(1, 8).trim(),
        auth: group.substr(16, 8).trim(),
        connectOwner: group.substr(39, 8).trim(),
        connectDate: group.substr(62, 6).trim(),
      };
      return connection;
    });
  return { user, connections };
};

module.exports = {
  sendCommand,
  getUserInfo
}