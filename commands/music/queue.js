const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q'],
    utilisation: '{prefix}queue',
    voiceChannel: true,
    description: 'გიჩვენებთ რიგს!',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`😘 ეხლა მუსიკა არ უკრავს ჯერ ჩართე სიკვ`);

        if (!queue.tracks[0]) return message.channel.send(`🤨 რიგის ჩვენებას მთხოვ? სამწუხაროდ რიგში არ დგას მუსიკა ||ისევე როგორც მამაშენი არ დგას პურზე რიგში (ქალებშია უეჭველი)||`);

        const embed = new MessageEmbed();
        const methods = ['', '🔁', '🔂'];

        embed.setColor('RED');
        embed.setThumbnail(message.guild.iconURL({ size: 2048, dynamic: true }));
        embed.setAuthor(`😒 რიგი: - ${message.guild.name} ${methods[queue.repeatMode]}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `**${i + 1}** - ${track.title} | ${track.author} (requested by : ${track.requestedBy.username})`);

        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `და **${songs - 5}** სხვა მუსიკა...` : `ალბომში **${songs}** მუსიკა...`;

        embed.setDescription(`😏 მიმდინარე ${queue.current.title}\n\n${tracks.slice(0, 5).join('\n')}\n\n${nextSongs}`);

        embed.setTimestamp();
        embed.setFooter('მიყვარხარ <3', message.author.avatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};