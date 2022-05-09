module.exports = {
    name: 'back',
    aliases: ['previous'],
    utilisation: '{prefix}back',
    voiceChannel: true,
    description: 'დაუკრავს 1-ით წინა მუსიკას',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`🤕 ეხლა მუსიკა არ უკრავს სხვა დროს ცადეთ!`);

        if (!queue.previousTracks[1]) return message.channel.send(`😶 ამის წინათ მუსიკა არ უკრავდა და რაგინდა?!`);

        await queue.back();

        message.channel.send(`👍 ეხლა მე შენ წინა მუსიკას გიმღერებ!`);
    },
};