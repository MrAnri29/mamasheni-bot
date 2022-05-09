module.exports = {
    name: 'shuffle',
    aliases: ['sh'],
    utilisation: '{prefix}shuffle',
    voiceChannel: true,
    description: '',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`😒 ეხლა მუსიკა არ უკრავს brah...`);

        if (!queue.tracks[0]) return message.channel.send(`🙄 მიმდინარე მუსიკის შემდეგ არაფერია, სხვა დროს ცადეთ!`);

        await queue.shuffle();

        return message.channel.send(`🧐 რიგი არეულია! **${queue.tracks.length}** მუსიკა!`);
    },
};