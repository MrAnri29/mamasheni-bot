module.exports = {
    name: 'stop',
    aliases: ['dc', 'leave'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`๐จ แ แแแงแ แซแแ, แแแจแแงแแ แแ?! แแฎแแ แแ แแคแแ แ แแ  แฃแแ แแแก...`);

        queue.destroy();

        message.channel.send(`๐ chao แแแแแ... แแฃแ แแ แฌแแแแ...`);
    },
};