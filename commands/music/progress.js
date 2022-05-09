module.exports = {
    name: 'progress',
    aliases: ['pbar'],
    utilisation: '{prefix}progress',
    voiceChannel: true,
    description: 'გიჩვენებთ პროგრესს...',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`👨 რაიყო ძმა, მაშაყირებ?! ეხლა არაფერი არ უკრავს...`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'უსასრულოა <3') return message.channel.send(`💪 ლაივში გიმღერი ძმა, ამას როგორ გადაახვევ?!`);

        message.channel.send(`${progress} (**${timestamp.progress}**%)`);
    },
};