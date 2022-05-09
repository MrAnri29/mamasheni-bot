module.exports = {
    name: 'skip',
    aliases: ['sk'],
    utilisation: '{prefix}skip',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`😷 ეხლა მუსიკა არ უკრავს... სხვა დროს ცადეთ!`);

        const success = queue.skip();

        return message.channel.send(success ? `⏩ ${queue.current.title} დავსკიპე!` : `🤒 დაფიქსირდა შეცდომა... თავიდან ცადეთ!`);
    },
};