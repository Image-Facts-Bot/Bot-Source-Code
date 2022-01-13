const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const url = "https://some-random-api.ml/animal/red_panda";

  axios
    .get(url)
    .then((res) => {
      const redpandaEmbed = new discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle(`Red Panda Image for ${message.author.username}`)
        .setImage(res.data.image)
        .setFooter({
          text: "Image from Some Random API",
        })
        .setTimestamp();

      const row = new discord.MessageActionRow().addComponents(
        new discord.MessageButton()
          .setLabel("Image Link")
          .setStyle("LINK")
          .setURL(res.data.image)
      );

      message.reply({
        embeds: [redpandaEmbed],
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
  name: "redpanda",
  aliases: [],
};
