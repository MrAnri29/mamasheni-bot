const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`๐ แแฎแแ แแฃแกแแแ แแ  แฃแแ แแแก แกแแงแแแ แฃแแ, แกแฎแแ แแ แแก แชแแแ!`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`๐ แแแแแแแแ แ แแฆแแ แแแแแ แแ แแก: ${queue.volume} ๐\n๐ค แแฃ แแแแแ แ แแ แจแแชแแแแ แจแแแงแแแแ แ แแชแฎแแ **1**-แแแแ  **${maxVol}**-แแแแ*`);

        if (queue.volume === vol) return message.channel.send(`๐ brah... แแแแแแแแ แ แแฆแแ แแแแแ แแกแแแแช ${queue.volume}-แ แแ แ แ แฃแแแ แจแแแชแแแแ แแแคแแชแแ?!`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`๐ แแฃ แจแแแงแแแแ แ แแชแฎแแ 1-แแแแ ${maxVol}-แแแแ`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `๐ แแแแแแแแ แ แแฆแแ แแแแแ: **${vol}**/**${maxVol}**% ๐` : `๐ฅฑ แแแคแแฅแกแแ แแ แจแแชแแแแ แแแแแแแ แชแแแแ!`);
    },
};