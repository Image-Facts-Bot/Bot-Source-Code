const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const url = "https://random-d.uk/api/v2/random";

  axios
    .get(url)
    .then((res) => {
      const duckEmbed = new discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle(`Duck Image for ${message.author.username}`)
        .setImage(res.data.url)
        .setFooter({
          text: "Image from Some Random API",
        })
        .setTimestamp();

      const row = new discord.MessageActionRow().addComponents(
        new discord.MessageButton()
          .setLabel("Image Link")
          .setStyle("LINK")
          .setURL(res.data.url)
      );

      message.reply({
        embeds: [duckEmbed],
        components: [row],
      });
    })
    .catch(() => {
      const errEmbed = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          "Image not available at the moment, please try again later."
        );

      message.reply({
        embeds: [errEmbed],
      });
    });
};

module.exports.config = {
  name: "duck",
  aliases: [],
};
