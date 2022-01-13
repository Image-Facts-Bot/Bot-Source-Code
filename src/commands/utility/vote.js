const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const voteButton = new discord.MessageButton()
    .setLabel("Vote Me on top.gg")
    .setStyle("LINK")
    .setURL("https://bit.ly/3pUhzVt");

  const row = new discord.MessageActionRow().addComponents(voteButton);

  message.reply({
    content: "Click the below button to Vote Me on top.gg",
    components: [row],
  });
};

module.exports.config = {
  name: "vote",
  aliases: ["upvote", "imagefactsvote", "imagefactsupvote"],
};
