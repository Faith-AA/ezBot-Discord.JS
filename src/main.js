const Discord = require('discord.js');
const fs = require('fs');

function getData()
{
    // read all the data in the txt file
    var txt = fs.readFileSync("OPEN ME.txt").toString().split("\n");
    return txt;
}

function getBotToken()
{
    // get the bot token from the txt file
    var txtData = getData();
    return txtData[6].slice(11).toString().replace(/\s+/g, '');
}

function getPrefix()
{
    // get the prefix from the txt file
    var txtData = getData();
    const prefix = txtData[10].slice(8).toString().replace(/\s+/g, '');
    // if none is provided. Use default.
    if (prefix == "") {
        return "!";
    } else {
        return prefix;
    }
}

function getCooldown()
{
    // get the cooldown from the txt file
    var txtData = getData();
    let cooldown = txtData[11].slice(16).toString().replace(/\s+/g, '');
    let isnum = /^\d+$/.test(cooldown);
    // return error if not number
    if (isnum == false && cooldown != "") {
        return console.log("ERROR: Please provide a integer for the usage_cooldown.");
    }
    cooldown = parseFloat(cooldown);
    // if none is provided. Use default.
    if (cooldown == "") {
        return 0;
    } else {
        return cooldown;
    }
}

function getAllMessageCommands()
{
    var txtData = getData();
    let commands = [];
    // go through data until the entry "message_command:".
    for (var i = 0; i < txtData.length; i++) {
        if (txtData[i].includes("message_command:")) {
            const command = txtData[i].slice(17).toString().replace(/\s+/g, '');
            if (command) {
                commands.push(command);
            }
        }
    }
    return commands;
}

function messageCommandInfo(command)
{
    var txtData = getData();
    let info = [];
    // go through data until the entry "message_command:".
    for (var i = 0; i < txtData.length; i++) {
        // fill data
        if (txtData[i].includes("message_command: " + command)) {
            info.push({
                'message_command': txtData[i].slice(17).toString().replace(/\s+/g, ''),
                'message_description': txtData[i+1].slice(21).toString(),
                'message_embed': txtData[i+2].slice(14).toString().replace(/\s+/g, ''),
                'message_color': txtData[i+3].slice(14).toString().replace(/\s+/g, ''),
                'message_title': txtData[i+4].slice(14).toString(),
                'message_footer': txtData[i+5].slice(15).toString(),
                'message_footer_image': txtData[i+6].slice(22).toString().replace(/\s+/g, ''),
                'message_author': txtData[i+7].slice(15).toString().replace(/\s+/g, ''),
                'message_author_image': txtData[i+8].slice(22).toString().replace(/\s+/g, ''),
                'message_image': txtData[i+9].slice(15).toString().replace(/\s+/g, ''),
            });
        }
    }
    return info;
}

function isValidHttpUrl(string) {
    // check if urls contains http: or https:
    let url;
    try {
      url = new URL(string);
    } catch (_) {
      return false;  
    }
  
    return url.protocol === "http:" || url.protocol === "https:";
  }

module.exports = {
    getPrefix,
    getData,
    getBotToken,
    getAllMessageCommands,
    messageCommandInfo,
    isValidHttpUrl,
    getCooldown
}