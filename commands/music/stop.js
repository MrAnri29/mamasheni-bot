module.exports = {
    name: 'stop',
    aliases: ['dc', 'leave'],
    utilisation: '{prefix}stop',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`👨 რაიყო ძმა, მაშაყირებ?! ეხლა არაფერი არ უკრავს...`);

        queue.destroy();

        message.channel.send(`👋 chao ამიგო... პურზე წავალ...`);
    },
};