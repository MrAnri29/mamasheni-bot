module.exports = {
    name: 'clear',
    aliases: ['cq'],
    utilisation: '{prefix}clear',
    voiceChannel: true,
    description: 'ასუფთავებს რიგს',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`🕵️‍♀️ დავადგინე რომ ეხლა მუსიკა არ უკრავს სხვა დროს ცადეთ!`);

        if (!queue.tracks[0]) return message.channel.send(`🔮 რა გავასუფთავო რიგი მამაშენისავით არ არსებობს?!`);

        await queue.clear();

        message.channel.send(`🗑️ რიგი გაიწმინდა!`);
    },
}