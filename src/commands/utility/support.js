const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const supportButton = new discord.MessageButton()
    .setLabel("Join my Support Server")
    .setStyle("LINK")
    .setURL("https://bit.ly/3zszeXq");

  const row = new discord.MessageActionRow().addComponents(supportButton);

  message.reply({
    content: "Click the below button to Join my Support Server",
    components: [row],
  });
};

module.exports.config = {
  name: "support",
  aliases: ["supportserver", "imagefactssupport", "imagefactssupportserver"],
};
