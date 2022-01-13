module.exports = (client) => {
  client.user.setActivity("-help", { type: "LISTENING" });
  console.log(`Logged in as ${client.user.tag}`);
};
