module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`๐ท แแฎแแ แแฃแกแแแ แแ  แฃแแ แแแก... แกแฎแแ แแ แแก แชแแแแ!`);

        const success = queue.skip();

        return message.channel.send(success ? `โฉ ${queue.current.title} แแแแกแแแแ!` : `๐ค แแแคแแฅแกแแ แแ แจแแชแแแแ... แแแแแแแ แชแแแแ!`);
    },
};