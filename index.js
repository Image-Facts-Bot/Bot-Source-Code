const ClientManager = require("./src/clientManager");

const client = new ClientManager({
  partials: ["MESSAGE", "CHANNEL", "REACTION"],
  intents: 32767,
  disableMentions: "everyone",
});

client.setup();
