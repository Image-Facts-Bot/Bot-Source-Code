const discord = require("discord.js");

module.exports.run = async (client, message, args) => {
  const topic = args[0];

  const helpEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Image & Facts Help Interface")
    .setDescription(
      "These are all my help modules, if you want detailed info on each command type `_website` command"
    )
    .addField("Animal Images :camera_with_flash:", "`_help images`", true)
    .addField("Animal Facts :exploding_head:", "`_help images`", true)
    .addField("Utility :gear:", "`_help utility`", true)
    .setFooter({
      text: "Use _ prefix before every command",
    })
    .setTimestamp();

  const imagesEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Animal Images commands")
    .setDescription(
      "`dog`, `cat`, `panda`, `redpanda`, `fox`, `koala`, `raccoon`, `kangaroo`, `bird`, `duck`"
    )
    .setFooter({
      text: "Use - prefix before every command",
    })
    .setTimestamp();

  const factsEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Animal Facts commands")
    .setDescription(
      "`dogfact`, `catfact`, `pandafact`, `redpandafact`, `foxfact`, `koalafact`, `raccoonfact`, `kangaroofact`, `birdfact`"
    )
    .setFooter({
      text: "Use - prefix before every command",
    })
    .setTimestamp();

  const utilityEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Utility commands")
    .setDescription(
      "`info`, `ping`, `invite`, `vote`, `support`, `website`, `help`"
    )
    .setFooter({
      text: "Use - prefix before every command",
    })
    .setTimestamp();

  if (!topic || topic.toLowerCase() === "modules") {
    message.reply({
      embeds: [helpEmbed],
    });
  } else if (topic.toLowerCase() === "images") {
    message.reply({
      embeds: [imagesEmbed],
    });
  } else if (topic.toLowerCase() === "facts") {
    message.reply({
      embeds: [factsEmbed],
    });
  } else if (topic.toLowerCase() === "utility") {
    message.reply({
      embeds: [utilityEmbed],
    });
  } else {
    message.reply({
      content:
        "This help module doesn't exist.\nModules which exist are - `images, facts and utility`",
    });
  }
};

module.exports.config = {
  name: "help",
  aliases: ["commands", "commandshelp"],
};
