const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const infoEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
    .setTitle("Image & Facts Info")
    .setDescription("Here's some basic information about myself")
    .addField("My Prefix", "-", false)
    .addField("My Usertag", "Image & Facts#8656", false)
    .addField(
      "My Developer's Usertag",
      "<@787019465568419871>\n<@823429083110441030>",
      false
    )
    .addField("I was developed on", "May 11th 2021")
    .setFooter({
      text: "Invite me to your server by using the -invite command",
    })
    .setTimestamp();

  const inviteButton = new discord.MessageButton()
    .setLabel("Invite Me")
    .setStyle("LINK")
    .setURL("https://bit.ly/3EVtE0Y");

  const voteButton = new discord.MessageButton()
    .setLabel("Vote Me on top.gg")
    .setStyle("LINK")
    .setURL("https://bit.ly/3pUhzVt");

  const supportButton = new discord.MessageButton()
    .setLabel("Join my Support Server")
    .setStyle("LINK")
    .setURL("https://bit.ly/3zszeXq");

  const buttonRow = new discord.MessageActionRow().addComponents(
    inviteButton,
    voteButton,
    supportButton
  );

  message.reply({
    embeds: [infoEmbed],
    components: [buttonRow],
  });
};

module.exports.config = {
  name: "info",
  aliases: ["imagefactsinfo"],
};
