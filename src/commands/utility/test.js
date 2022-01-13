const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.reply({
    content: "Hello World!",
  });
};

module.exports.config = {
  name: "test",
  aliases: ["tst"],
};
