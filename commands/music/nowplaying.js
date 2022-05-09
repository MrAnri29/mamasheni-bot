const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,
    description: 'გიჩვნებთ მიმდინარე მუსიკის ინფორმაციას...',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`👨 რაიყო ძმა, მაშაყირებ?! ეხლა არაფერი არ უკრავს...`);

        const track = queue.current;

        const embed = new MessageEmbed();

        embed.setColor(`#0123sd`);
        embed.setThumbnail(track.thumbnail);
        embed.setAuthor(track.title, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const methods = ['disabled', 'track', 'queue'];

        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Infinity' ? 'infinity (live)' : track.duration;

        embed.setDescription(`ხმა: **${queue.volume}**%\nხანგრძლივობა: **${trackDuration}**\nმარყუჟი: **${methods[queue.repeatMode]}**\nამის დაკვრა ${track.requestedBy}-მ(ა) მომთხოვა \<3`);

        embed.setTimestamp();

        const saveButton = new MessageButton();

        saveButton.setLabel('⬇ შეინახე');
        saveButton.setCustomId('saveTrack');
        saveButton.setStyle('SUCCESS');

        const row = new MessageActionRow().addComponents(saveButton);

        message.channel.send({ embeds: [embed], components: [row] });
    },
};