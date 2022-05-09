const ms = require('ms');

module.exports = {
    name: 'seek',
    aliases: [],
    utilisation: '{prefix}seek [time]',
    voiceChannel: true,
    description: 'გადაახვიეთ მუსიკა...',

    async execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`😑 ეხლა მუსიკა არ უკრავს...`);

        const timeToMS = ms(args.join(' '));

        if (timeToMS >= queue.current.durationMS) return message.channel.send(`👨 შვილიკო მოცემული დრო მუსიკის ხანგრძლივობაზე დიდია და ...\n შეგიძლია ცადო 1s 5second და ასშ...`);

        await queue.seek(timeToMS);

        message.channel.send(`**${ms(timeToMS, { long: true })}** ✅`);
    },
};