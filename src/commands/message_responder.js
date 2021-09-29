const { Command } = require("discord-akairo");
const Discord = require("discord.js");
const { getAllMessageCommands, messageCommandInfo, getPrefix, isValidHttpUrl } = require('../main');

class messageResponder extends Command {
  constructor() {
    super("message_responder", {
      aliases: getAllMessageCommands(),
      clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS"],
      userPermissions: ["SEND_MESSAGES"],
    });
  }

  async exec(message) {
    const args = message.content.slice(getPrefix()).trim().split(/ +/);
    
    // gather all data for the response
    const data = messageCommandInfo(args[0].slice(1))[0]

    // put all data in variables
    const description = data["message_description"];
    const isEmbed = data["message_embed"];
    const color = data["message_color"];
    const title = data["message_title"];
    const footer = data["message_footer"];
    const footer_image = data["message_footer_image"];
    const author = data["message_author"];
    const author_image = data["message_author_image"];
    const image = data["message_image"];

    // check if necessary data is present
    if (description == "" || description == "\r") {
      return console.log("ERROR: Please provide a description for the command '" + args[0].slice(1) + "'")
    } else if (isEmbed != "true" && isEmbed != "false") {
      return console.log("ERROR: Please provide a valid boolean in embed for the command '" + args[0].slice(1) + "'")
    }

    // send message if embed is off
    if (isEmbed == "false") {
      message.channel.send({ content: description });
      return;
    }

    // send a embed
    if (isEmbed == "true") {
      // create embed
      const embed = new Discord.MessageEmbed()

      // data validity checker
      if (color.length > 6) {
        return console.log("ERROR: Please provide a integer for the color in the command '" + args[0].slice(1) + "'")
      }


      // add description
      embed.setDescription(description);
      
      // add color
      if (color != "" && color != "\r") {
        embed.setColor(color);
      }

      // add title
      if (title != "" && title != "\r") {
        embed.setTitle(title);
      }

      // add footer
      if (footer != "" && footer != "\r") {
        embed.setFooter(footer);
      }

      // add footer image
      if (footer_image != "" && footer_image != "\r" && footer != "" && footer != "\r") {
        if (isValidHttpUrl(footer_image) == false) {
          return console.log("ERROR: Please provide a link for the footer image in the command '" + args[0].slice(1) + "'")
        }
        embed.setFooter(footer, footer_image);
      }
      
      // add author
      if (author != "" && author != "\r") {
        embed.setAuthor(author);
      }

      // add author image
      if (author_image != "" && author_image != "\r" && author != "" && author != "\r") {
        if (isValidHttpUrl(author_image) == false) {
          return console.log("ERROR: Please provide a link for the author image in the command '" + args[0].slice(1) + "'")
        }
        embed.setFooter(author, author_image);
      }

      // add image
      if (image != "" && image != "\r") {
        if (isValidHttpUrl(image) == false) {
          return console.log("ERROR: Please provide a link for the image in the command '" + args[0].slice(1) + "'")
        }
        embed.setImage(image);
      }

      // send embed
      return message.channel.send({
        embeds: [embed],
      });
    }
  }
}

module.exports = messageResponder;