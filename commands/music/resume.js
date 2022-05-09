module.exports = {
    name: 'resume',
    aliases: ['rs'],
    utilisation: '{prefix}resume',
    voiceChannel: true,
    description: 'გაანახლეთ დაპაუზებული მუსიკა',
    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`😑 ეხლა მუსიკა არ უკრავს სიყვარულო თავიდან ცადე!`);

        const success = queue.setPaused(false);

        return message.channel.send(success ? `▶ ${queue.current.title} განახლდა` : `🤒 დაფიქსირდა შეცდომა... თავიდან ცადეთ!`);
    },
};