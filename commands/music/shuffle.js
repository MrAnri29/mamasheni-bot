module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,
    description: '',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`๐ แแฎแแ แแฃแกแแแ แแ  แฃแแ แแแก brah...`);

        if (!queue.tracks[0]) return message.channel.send(`๐ แแแแแแแแ แ แแฃแกแแแแก แจแแแแแ แแ แแคแแ แแ, แกแฎแแ แแ แแก แชแแแแ!`);

        await queue.shuffle();

        return message.channel.send(`๐ง แ แแแ แแ แแฃแแแ! **${queue.tracks.length}** แแฃแกแแแ!`);
    },
};