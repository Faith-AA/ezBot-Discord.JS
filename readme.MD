# ezBot - Discord.JS

Have you ever dreamed to have a custom Discord bot for your server? But you don't have the coding prerequisite to do so? You have found the right place! Make yourself a Discord.JS bot without having to code one bit! Just edit the .txt file with your preferences with notepad and you're all set with your BRAND NEW discord bot.

## GET STARTED

You first need to create a bot token. You do this by going to the [Discord Developer Portal](https://discord.com/developers/applications) and create a new application. Click on the bot menu and create the bot. You copy the **token** and paste it into the .txt file.

```text
1   // Discord Bot Dashboard. 
2   // Only adjust the values for each option. DO NOT DELETE LINES or else the bot will not work.
3   // open the read.md for more info.
4 
5 
6   // Credentials.
7   bot_token: [PASTE THE TOKEN HERE]
8
9
10   // General Bot Info.
11   prefix: [ENTER A PREFIX (A symbol before you type the command. default: !)]
12   usage_cooldown: [ENTER A COOLDOWN (Limits to 1 message to a certain amount of ms). default: 0 recommended: 5000]
```

# Commands

## Message responder

The bot will respond to this argument when a certain word with your prefix in front is entered.

### Usage Example:
```
// Message Responder. 
message_command: help
message_description: Please DM a moderator or higher up with your question and you'll receive a reply shortly.
message_embed: true
message_color: ff0000
message_title: 
message_footer: My bot
message_footer_image: https://cdn.pixabay.com/photo/2018/10/30/16/06/water-lily-3784022_960_720.jpg
message_author: Anonymous
message_author_image: https://images.pexels.com/photos/1987301/pexels-photo-1987301.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500
message_image: 

message_command: welcome
message_description: Welcome to the server! 
message_embed: false
message_color:
message_title: 
message_footer:
message_footer_image: 
message_author:
message_author_image: 
message_image:
```

### Info
* message_command
    - Indented item
    - Indented item
* message_description
* message_embed
* message_color
* message_title
* message_footer
* message_footer_image
* message_author
* message_author_image
* message_image


## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Suggestions
I'm always looking to expand this project. If you particularly want a feature in here that you really want or need, you can open an issue and state it there.

## License
[MIT](https://choosealicense.com/licenses/mit/)