module.exports = {
    name: 'pause',
    aliases: [],
    utilisation: '{prefix}pause',
    voiceChannel: true,
    description: 'აპაუზებს მუსიკას :)',

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue) return message.channel.send(`🤔 რა დავაპაუზო brah?! არაფერი არ უკრავს...`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `მიმდინარე მუსიკა: ${queue.current.title} წარმატებით დავაპაუზე ✅` : `:prayer_beads: აუ სმნ რატომღაც ვერ ვაპაუზებ`);
    },
};