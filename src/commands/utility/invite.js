const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const inviteButton = new discord.MessageButton()
    .setLabel("Invite Me")
    .setStyle("LINK")
    .setURL("https://bit.ly/3EVtE0Y");

  const row = new discord.MessageActionRow().addComponents(inviteButton);

  message.reply({
    content: "Click the below button to Invite Me on your server",
    components: [row],
  });
};

module.exports.config = {
  name: "invite",
  aliases: ["imagefactsinvite"],
};
