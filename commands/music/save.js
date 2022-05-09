module.exports = {
    name: 'save',
    aliases: ['sv'],
    utilisation: '{prefix}save',
    voiceChannel: true,
    description: 'შეინახეთ მუსიკა :)',

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`👨 რაიყო ძმა, მაშაყირებ?! ეხლა არაფერი არ უკრავს...`);

        message.author.send(`აი ეს მუსიკა დაგევარსათ და შეინახეთ რა: ${queue.current.title} | ${queue.current.author} \n\`\`\`სერვერის სახელი:\n${message.guild.name}\`\`\``).then(() => {
            message.channel.send(`✨ დმ მოგწერეთ \<3`);
        }).catch(error => {
            message.channel.send(`🙃 კიკნა კიარავარ დმ გახსენი რომ მოგწერო <3`);
        });
    },
};