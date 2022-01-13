const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  message.reply({
    content: "Website is in development :tools:",
  });
};

module.exports.config = {
  name: "website",
  aliases: ["web", "imagefactswebsite", "imagefactsweb"],
};
