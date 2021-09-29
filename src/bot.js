const {AkairoClient, CommandHandler, ListenerHandler } = require("discord-akairo")

const { join } = require("path")
const { Intents } = require("discord.js");
const { getBotToken, getPrefix, getCooldown } = require('./main');

class MyClient extends AkairoClient {
    constructor() {
        super({
            // Options for Akairo go here.
        }, {
            // Options for discord.js goes here.
            disableEveryone: true,
                intents: [
                    Intents.FLAGS.GUILD_MEMBERS, 
                    Intents.FLAGS.GUILDS, 
                    Intents.FLAGS.GUILD_MESSAGES,
                    Intents.FLAGS.DIRECT_MESSAGES
                ],
            partials: [
                'CHANNEL'
            ]
        });

        // Handlers
        this.commandHandler = new CommandHandler(this, {
            directory: join(__dirname, 'commands'),
            blockBots: true,
            blockClient: true,
            allowMention: true,
            defaultCooldown: getCooldown(),
            fetchMembers: true,
            prefix: getPrefix(),   
        });
        this.listenerHandler = new ListenerHandler(this, {
            directory: join(__dirname, 'listeners')
        });

        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
}

const client = new MyClient();

client.login(getBotToken());