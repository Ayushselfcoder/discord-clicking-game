# Installations
```
npm i discord-clicking-game (For discord 13.x)
npm i Ayushselfcoder/discord-clicking-game (discord.js 14.x)
```

# Note
- We only Supports Discord.js V-13.x, So that we can use new features like buttons.
- You need to use Node JS V-16.x for this module.

# What ?
This is an module to create a clickling game, Now you might be thinking what is this so go to the bottom to see the images.

# How ?
```js
const click = require('discord-clicking-game');
const game = new click();

/** Solo Mode
 * @param {Discord.Message} message The message | Command Interacion object in which command was used
 */
game.solo(message);

/** Duo mode
 * @param {Discord.Message} message The message | Command Interacion object in which command was used
 * @param {Discord.User} player2 The second player.
 */
game.duo(message,player2);

/**
  * Part Mode for clicking game. ALL human users can participate
  * @param {Discord.Message} message The Message | Command Interaction, in which command was used
  */
game.party(message) 
```

# Images
- ## Game During Getting Ready
![ready.png](https://cdn.discordapp.com/attachments/880732844220100608/883606393943359518/unknown.png)

- ## Game Started
![started.png](https://cdn.discordapp.com/attachments/880732844220100608/883606218004905994/unknown.png)

- ## Game Lost
![lost.png](https://cdn.discordapp.com/attachments/880732844220100608/883606265933221888/unknown.png)

- ## Game Won
![won.png](https://cdn.discordapp.com/attachments/880732844220100608/883606311265251368/unknown.png)

# Customizations
```js
const click = require('discord-clicking-game');
const game = new click("🎈",// Emoji to use on correct button
    2000 || "random", // Time in which game starts after the ready message
    3000, // Time in which game auto ends , NOTE time should be in Milleseconds
    {
        win: "{winner} won in {time}", // winning messages
        loose: "You nerds are slowowowoow", // Game end message when no one clicks
        started: "Game is started click fast", // Game started message
        ready: "Get your toes in positon cause game is gonna start soon", // Ready message
    }
);
```

# Supports
For support or issues or queries contace me on my [discord server](https://discord.gg/XYnMTQNTFh).
