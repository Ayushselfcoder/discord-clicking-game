const Discord = require('discord.js');
const paraChecker = require('./utility/paraChecker');
const start = require('./utility/start');

class clickingGame {
    /**
     * Create An Clicking Game Object.
     * @param {String} emoji The emoji to use for the button like 🖱.
     * @param {Number | "random"} startTime The time in which game starts after the ready message. It should be in milliseconds.
     * @param {Number} endTime The time in which game auto ends. It should be in milliseconds.
     * @param {Object} messages The messages configuration.
     * @param {String} messages.win The message to show on victory.
     * @param {String} messages.ready The message to show while getting ready.
     * @param {String} messages.loose The message to show when no one clicks before timeout i.e. 8 seconds.
     * @param {String} messages.started The message to show when game is started.
     */
    constructor(emoji = "🖱", startTime = 1000, endTime = 3000, messages) {
        if (typeof (emoji) !== "string" || emoji.length === 0) throw new Error("Invalid emoji was provided");
        if (startTime !== "random" && (typeof (startTime) !== "number" || startTime < 1000)) throw new Error("Invalid startTime was provided. Note startTime should be in milliseconds and at least 1000 i.e. 1 second");
        if (typeof (endTime) !== "number" || endTime < 1000) throw new Error("Invalid endTime was provided. Note endTime should be in milliseconds and at least 1000 i.e. 1 second");

        this.emoji = emoji;
        this.startTime = startTime;
        this.endTime = endTime;
        this.win = messages?.win || "{winner} clicked first, In {time}";
        this.loose = messages?.loose || "You damn turtles you are tooo slow";
        this.ready = messages?.ready || "get ready for clicking festival 🎭";
        this.started = messages?.started || "Click The DANG Button";
    }

    /**
     * Solo Mode for clicking game. User VS No One.
     * @param {Discord.Message} message The Message | Command Interaction, in which command was used
     */
    solo(message) {
        if (paraChecker(message) !== "") throw new Error(paraChecker(message));
        start.bind(this)(message);
    }

    /**
     * Duo Mode for clicking game. User VS Player 2
     * @param {Discord.Message} message The Message | Command Interaction, in which command was used
     * @param {Discord.User} player2 The second player.
     */
    duo(message, player2) {
        if (paraChecker(message, player2) !== "") throw new Error(paraChecker(message, player2));
        start.bind(this)(message, player2);
    }

    /**
     * Part Mode for clicking game. ALL human users can participate
     * @param {Discord.Message} message The Message | Command Interaction, in which command was used
     */
    party(message) {
        if (paraChecker(message) !== "") throw new Error(paraChecker(message));
        start.bind(this)(message, "gg", true);
    }
}

module.exports = clickingGame;