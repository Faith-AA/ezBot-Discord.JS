const { Listener } = require("discord-akairo");

class Ready extends Listener {
  constructor() {
    super("ready", {
      event: "ready",
      emitter: "client",
    });
  }

  async exec() {
    console.log("Your bot has started!");
  }
}

module.exports = Ready;