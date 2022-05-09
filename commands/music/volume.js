const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`🙄 ეხლა მუსიკა არ უკრავს სიყვარულო, სხვა დროს ცადე!`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`😘 მიმდინარე ჟღერადობა არის: ${queue.volume} 🔊\n🤗 თუ გინდა რომ შეცვალო შეიყვანე რიცხვი **1**-იდან  **${maxVol}**-ამდე*`);

        if (queue.volume === vol) return message.channel.send(`🙄 brah... მიმდინარე ჟღერადობა ისედაც ${queue.volume}-ა და რა უნდა შევცვალო გაფიცებ?!`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`😕 აუ შეიყვანე რიცხვი 1-იდან ${maxVol}-ამდე`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `😀 მიმდინარე ჟღერადობა: **${vol}**/**${maxVol}**% 🔊` : `🥱 დაფიქსირდა შეცდომა თავიდან ცადეთ!`);
    },
};