const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'search',
    aliases: ['sh'],
    utilisation: '{prefix}search [song name]',
    voiceChannel: true,
    description: 'მოძებნეთ თქვენი სასურველი მუსიკა :)',

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`🙃 ეგეთი არაფერი არ მოიძებნება...`);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`😔 ეგეთი არაფერი არ მოიძებნება...`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('GOLD');
        embed.setAuthor(`🤔 ესაა რაც ვიპოვე: ${args.join(' ')}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nSelect choice between **1** and **${maxTracks.length}** or **cancel** ⬇️`);

        embed.setTimestamp();

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancel') return message.channel.send(`😪 ძიება დასრულდა!`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`🥱 გთხოვ ნორმალურად მიპასუხო ცადე რიცხვი **1**-იდან **${maxTracks.length}**-ამდე ან თუ ვერაფერი ვერ ნახე მაშინ: **cancel**...`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                return message.channel.send(`😥 სამწუხაროდ ვოისში ვერ შემოვდივარ... სხვა დროს ცადეთ...`);
            }

            await message.channel.send(`😇 გთხოვთ დაელოდოთ...`);

            queue.addTrack(res.tracks[query.content - 1]);

            if (!queue.playing) await queue.play();
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`😠 ამდენი ხანი რა ვერ აირჩიე?! ვსიო შენი დრო გავიდა...`);
        });
    },
};