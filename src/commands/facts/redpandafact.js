const discord = require("discord.js");
const axios = require("axios");

module.exports.run = async (client, message, args) => {
  const url = "https://some-random-api.ml/animal/red_panda";

  axios
    .get(url)
    .then((res) => {
      const redpandaEmbed = new discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle(`Red Panda Fact for ${message.author.username}`)
        .setDescription(`***${res.data.fact}***`)
        .setFooter({
          text: "Fact from Some Random API",
        })
        .setTimestamp();

      message.reply({
        embeds: [redpandaEmbed],
      });
    })
    .catch(() => {
      const errEmbed = new discord.MessageEmbed()
        .setColor("RED")
        .setDescription(
          "Fact not available at the moment, please try again later."
        );

      message.reply({
        embeds: [errEmbed],
      });
    });
};

module.exports.config = {
  name: "redpandafact",
  aliases: [],
};
