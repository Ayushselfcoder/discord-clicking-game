const { User, ActionRowBuilder, ButtonBuilder, Message, ButtonStyle } = require("discord.js");

const ms = require('ms');

/**
 * Module to Start the game
 * @param {Message} message The Message | Command Interaction, in which command was used
 * @param {User} player2 
 */
module.exports = async function start(message, player2, party) {
    const rows = [], i = Math.floor(Math.random() * 25);
    let left = 0;

    while (left < 25) {
        const index = Math.floor(left / 5);
        const cc = new ButtonBuilder().setCustomId("useful_click_button" + left).setDisabled(i !== left).setLabel("\u200b").setStyle(ButtonStyle.Primary);
        if (i === left) cc.setEmoji(this.emoji)

        if (!rows[index]) rows[index] = new ActionRowBuilder();

        rows[index].addComponents(cc);

        left++;
    }

    let msg = await message.channel.send({ embeds: [{ color: "Aqua", title: this.ready }] });

    await new Promise((resolve) => setTimeout(resolve, this.startTime === "random" ? Math.floor(Math.random() * 1500 + 2500) : this.startTime));

    const start = Date.now() + 20, filter = party ? (i) => i.message.id === msg.id && !i.user.bot : (i) => i.message.id === msg.id && (i.user.id === message.author.id || i.user.id === player2?.id);

    msg.edit({ embeds: [{ color: "Grey", title: this.started }], components: rows });

    const collector = message.channel.createMessageComponentCollector({ filter: filter, time: this.endTime, message: msg });

    collector.on('collect', (interaction) => collector.stop(interaction.user));

    collector.on('end', (shit, reason) => {
        if (reason === "time") return msg.edit({ components: [], embeds: [{ color: "Red", title: this.loose }] })

        msg.edit({ components: [], embeds: [{ color: "Green", title: "Game Ended", description: this.win.replace(/{winner}/g, reason.username).replace(/{time}/g, ms(Date.now() - start)) }] })
    })
}